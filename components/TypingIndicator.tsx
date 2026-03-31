import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TypingIndicator({ users }: { users: string[] }) {
  if (users.length === 0) return null;
  return (
    <Text style={styles.text}>
      {users.join(', ')} {users.length > 1 ? 'are' : 'is'} typing...
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 12, fontStyle: 'italic', color: '#888', marginLeft: 15, marginVertical: 5 }
});