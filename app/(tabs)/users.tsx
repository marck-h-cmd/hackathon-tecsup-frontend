import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { UserCard } from '@/components/user-card';
import { fetchUsers } from '@/services/userService';
import { User } from '@/types/api';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchUsers()
      .then((data) => mounted && setUsers(data))
      .catch((err) => mounted && setError(err.message || 'Error'))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Usuarios</ThemedText>
      {loading && <ThemedText>Cargando...</ThemedText>}
      {error && <ThemedText>{error}</ThemedText>}
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
  },
});
