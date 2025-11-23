import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useHookColor } from '@/hooks/use-hook-color';
import { getEstadisticasUsuarios } from '@/services/userService';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { ColorValue, Dimensions, ScrollView, StyleSheet, View, ViewProps } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

interface Estadisticas {
  total_usuarios: number;
  total_estudiantes: number;
  total_administradores: number;
  usuarios_activos: number;
  estudiantes_con_perfil: number;
  estudiantes_con_streak: number;
  tasa_completacion_perfiles: number;
}

export type DashboardScreenProps = ViewProps &{
  lightColor?: string;
  darkColor?: string;
};

const DashboardScreen = ({ lightColor, darkColor }: DashboardScreenProps) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Estadisticas | null>(null);

  const getColor = useHookColor(lightColor, darkColor);
  const backgroundColor = getColor('card');

  const getData = async () => {
    try {
      setLoading(true);
      const estadisticas = await getEstadisticasUsuarios();
      setStats(estadisticas.data);
    } catch (err) {
      setError((err as Error).message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const chartData = stats ? [
    {
      name: 'Estudiantes',
      population: stats.total_estudiantes,
      color: '#4ECDC4',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Admins',
      population: stats.total_administradores,
      color: '#FF6B6B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ] : [];

  return (
    <SafeAreaBackground>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.container}>
          {loading && <ThemedText style={styles.loadingText}>Cargando...</ThemedText>}
          {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
          
          {stats && (
            <>
              {/* Tarjetas de estadísticas principales */}
              <View style={styles.cardsContainer}>
                <StatCard
                  title="Total Usuarios"
                  value={stats.total_usuarios}
                  icon="👥"
                  colors={['#667eea', '#764ba2']}
                />
                <StatCard
                  title="Usuarios Activos"
                  value={stats.usuarios_activos}
                  icon="✨"
                  colors={['#f093fb', '#f5576c']}
                />
              </View>

              <View style={styles.cardsContainer}>
                <StatCard
                  title="Estudiantes"
                  value={stats.total_estudiantes}
                  icon="🎓"
                  colors={['#4facfe', '#00f2fe']}
                />
                <StatCard
                  title="Con Streak"
                  value={stats.estudiantes_con_streak}
                  icon="🔥"
                  colors={['#43e97b', '#38f9d7']}
                />
              </View>

              {/* Gráfica de pastel */}
              <View style={[styles.chartContainer, { backgroundColor }]}>
                <ThemedText type="subtitle" style={styles.chartTitle}>
                  Distribución de Usuarios
                </ThemedText>
                <PieChart
                  data={chartData}
                  width={Dimensions.get('window').width - 40}
                  height={220}
                  chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  }}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  absolute
                />
              </View>

              {/* Tarjeta de tasa de completación */}
              <View style={[styles.completionCard, { backgroundColor }]}>
                <ThemedText type="subtitle" style={styles.completionTitle}>
                  Tasa de Completación de Perfiles
                </ThemedText>
                <View style={styles.progressBarContainer}>
                  <View 
                    style={[
                      styles.progressBar, 
                      { width: `${stats.tasa_completacion_perfiles}%` }
                    ]} 
                  />
                </View>
                <ThemedText style={styles.percentageText}>
                  {stats.tasa_completacion_perfiles}%
                </ThemedText>
              </View>
            </>
          )}
        </ThemedView>
      </ScrollView>
    </SafeAreaBackground>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  icon: string;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, colors }) => (
  <LinearGradient
    colors={colors}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.statCard}
  >
    <ThemedText style={styles.cardIcon}>{icon}</ThemedText>
    <ThemedText type="defaultSemiBold" style={styles.cardValue}>
      {value}
    </ThemedText>
    <ThemedText style={styles.cardTitle}>{title}</ThemedText>
  </LinearGradient>
);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 16,
    gap: 16,
  },
  title: {
    marginBottom: 8,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#FF6B6B',
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 2,
    padding: 8
  },
  cardValue: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 4,
    padding: 4
  },
  cardTitle: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
  chartContainer: {
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  chartTitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  completionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  completionTitle: {
    marginBottom: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4ECDC4',
    borderRadius: 6,
  },
  percentageText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ECDC4',
  },
});

export default DashboardScreen;