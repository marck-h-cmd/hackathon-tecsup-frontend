# Safe Area Context - Guía de Uso

## ¿Qué es Safe Area Context?

Safe Area Context es una librería que te ayuda a evitar que tu contenido se renderice bajo elementos del sistema operativo como:
- **iOS**: Notch (muesca), Dynamic Island, home indicator
- **Android**: Notificaciones, navigation bar, status bar

## Configuración ✅

Ya está configurado en `app/_layout.tsx`:

```tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Tu app aquí */}
    </SafeAreaProvider>
  );
}
```

## Cómo Usarlo

### Opción 1: Hook `useSafeAreaInsets()` (Recomendado)

Obtén los insets y úsalos en tu lógica:

```tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

export function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      {/* Tu contenido aquí */}
    </View>
  );
}
```

### Opción 2: Componente `SafeAreaView`

Envuelve tu contenido directamente:

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

export function MyScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      {/* Tu contenido aquí - automáticamente tiene padding */}
    </SafeAreaView>
  );
}
```

**Parámetro `edges`:**
- `['top']` - Solo aplica padding arriba
- `['bottom']` - Solo aplica padding abajo
- `['left', 'right']` - Solo aplica padding a los lados
- `['top', 'bottom', 'left', 'right']` o omitir - Aplica a todos

## Casos de Uso Comunes

### Header con Safe Area
```tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HeaderWithSafeArea() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      paddingTop: insets.top,
      paddingHorizontal: 16,
      backgroundColor: '#000',
    }}>
      {/* Header content */}
    </View>
  );
}
```

### Bottom Tab Navigation
```tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabBar() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      paddingBottom: insets.bottom,
      borderTopWidth: 1,
    }}>
      {/* Tab buttons */}
    </View>
  );
}
```

### Full Screen Content
```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

export function FullScreenContent() {
  return (
    <SafeAreaView 
      style={{ flex: 1 }}
      edges={['top', 'bottom']}
    >
      {/* Content respeta los bordes seguros */}
    </SafeAreaView>
  );
}
```

## Valores que Retorna `useSafeAreaInsets()`

```typescript
{
  top: number;     // Distance from top (notch, etc)
  bottom: number;  // Distance from bottom (home indicator, etc)
  left: number;    // Distance from left edge
  right: number;   // Distance from right edge
}
```

**Ejemplo de valores:**
- iPhone con notch: `{ top: 47, bottom: 34, left: 0, right: 0 }`
- Android normal: `{ top: 0, bottom: 0, left: 0, right: 0 }`
- iPhone normal: `{ top: 0, bottom: 0, left: 0, right: 0 }`

## Componente de Ejemplo

Mira `components/safe-area-example.tsx` para ver cómo usarlo en la práctica.

## Tips Importantes

✅ **DO:**
- Usa `useSafeAreaInsets()` en componentes funcionales
- Aplica insets a headers y footers
- Usa `edges` para controlar qué bordes respetar

❌ **DON'T:**
- No uses hardcoded padding values (50px arriba, etc)
- No olvides que diferentes dispositivos tienen diferentes insets
- No apliques insets a todo (solo donde lo necesites)

## Testing en Diferentes Dispositivos

- **iOS con Notch**: `npm run ios` (iPhone 12+)
- **Android**: `npm run android`
- **Web**: No aplica, ignorado automáticamente
