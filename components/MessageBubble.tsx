import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Message } from '../hooks/useMQTT';

export default function MessageBubble({ message, isMine }: { message: Message; isMine: boolean }) {
  return (
    <View style={[styles.bubble, isMine ? styles.myBubble : styles.otherBubble]}>
      {!isMine && <Text style={styles.sender}>{message.sender}</Text>}
      <Text style={isMine ? styles.myText : styles.otherText}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: { maxWidth: '80%', padding: 10, borderRadius: 15, marginVertical: 5, marginHorizontal: 10 },
  myBubble: { alignSelf: 'flex-end', backgroundColor: '#ff6600' },
  otherBubble: { alignSelf: 'flex-start', backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd' },
  sender: { fontSize: 10, color: '#888', marginBottom: 2 },
  myText: { color: '#fff' },
  otherText: { color: '#333' }
});