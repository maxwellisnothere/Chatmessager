import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTitle: 'MQTT Chat PHAM' }}>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="chat" options={{ title: 'Chat Room' }} />
    </Stack>
  );
}