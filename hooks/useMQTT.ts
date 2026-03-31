import { useEffect, useRef, useState } from 'react';
import mqtt, { MqttClient } from 'mqtt';
import { MQTT_CONFIG } from '../constants/mqtt';

export type Message = {
  id: string;
  sender: string;
  text: string;
  timestamp: number;
};

export function useMQTT(username: string, room = 'general') {
  const clientRef = useRef<MqttClient | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);
  const [typing, setTyping] = useState<string[]>([]);

  useEffect(() => {
    if (!username) return;

    const client = mqtt.connect(MQTT_CONFIG.brokerUrl, {
      ...MQTT_CONFIG.options,
      clientId: `chat_${username}_${Date.now()}`,
      will: {  // Last Will — แจ้งเมื่อ offline กะทันหัน
        topic: MQTT_CONFIG.topics.presence(username),
        payload: JSON.stringify({ user: username, online: false }),
        qos: 1, retain: true,
      }
    });

    client.on('connect', () => {
      setConnected(true);
      // Subscribe topics
      client.subscribe(MQTT_CONFIG.topics.room(room), { qos: 1 });
      client.subscribe(MQTT_CONFIG.topics.typing(room));
      // Announce online
      client.publish(
        MQTT_CONFIG.topics.presence(username),
        JSON.stringify({ user: username, online: true }),
        { qos: 1, retain: true }
      );
    });

    client.on('message', (topic, payload) => {
      const data = JSON.parse(payload.toString());
      if (topic === MQTT_CONFIG.topics.room(room)) {
        setMessages(prev => [...prev, data]);
      } else if (topic.startsWith('typing/')) {
        setTyping(data.isTyping
          ? prev => [...new Set([...prev, data.user])]
          : prev => prev.filter(u => u !== data.user)
        );
      }
    });

    client.on('disconnect', () => setConnected(false));
    clientRef.current = client;

    return () => {
      client.publish(
        MQTT_CONFIG.topics.presence(username),
        JSON.stringify({ user: username, online: false }),
        { qos: 1, retain: true }
      );
      client.end();
    };
  }, [username, room]);

  const sendMessage = (text: string) => {
    if (!clientRef.current) return;
    const msg: Message = {
      id: crypto.randomUUID(),
      sender: username,
      text,
      timestamp: Date.now(),
    };
    clientRef.current.publish(
      MQTT_CONFIG.topics.room(room),
      JSON.stringify(msg),
      { qos: 1 }
    );
  };

  const sendTyping = (isTyping: boolean) => {
    clientRef.current?.publish(
      MQTT_CONFIG.topics.typing(room),
      JSON.stringify({ user: username, isTyping })
    );
  };

  return { messages, connected, typing, sendMessage, sendTyping };
}