import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleJoin = () => {
    if (name.trim()) {
      router.push({ pathname: '/chat', params: { username: name } });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ระบุชื่อของคุณ</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name..."
      />
      <Button title="Join Chat" onPress={handleJoin} color="#ff6600" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10, fontSize: 16 },
});