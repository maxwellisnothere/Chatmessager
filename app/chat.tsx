import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useMQTT } from '../hooks/useMQTT';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';

export default function ChatScreen() {
  const { username } = useLocalSearchParams<{ username: string }>();
  const { messages, connected, typing, sendMessage, sendTyping } = useMQTT(username || 'Anonymous');
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
      sendTyping(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.status, { backgroundColor: connected ? '#4CAF50' : '#F44336' }]}>
        <Text style={styles.statusText}>{connected ? 'Connected' : 'Connecting...'}</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble message={item} isMine={item.sender === username} />
        )}
        ListFooterComponent={<TypingIndicator users={typing} />}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => {
            setInput(text);
            sendTyping(text.length > 0);
          }}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  status: { padding: 5, alignItems: 'center' },
  statusText: { color: '#fff', fontSize: 12 },
  inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: '#fff' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, paddingHorizontal: 15, height: 40 },
  sendButton: { marginLeft: 10, justifyContent: 'center', backgroundColor: '#ff6600', borderRadius: 20, paddingHorizontal: 20 },
  sendText: { color: '#fff', fontWeight: 'bold' }
});