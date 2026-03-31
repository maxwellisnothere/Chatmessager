export const MQTT_CONFIG = {
  brokerUrl: 'wss://e4c0e83f7ceb4d7998bab8b89e6b6884.s1.eu.hivemq.cloud:8884/mqtt',
  options: {
    username: 'Buasawan',
    password: '@Pham09102004',
    clientId: `chat_${Math.random().toString(16).slice(2)}`,
    clean: true,
    reconnectPeriod: 3000,
  },
  topics: {
    room: (room: string) => `chat/room/${room}`,
    dm: (a: string, b: string) => `chat/dm/${[a,b].sort().join('/')}`,
    presence: (user: string) => `presence/${user}`,
    typing: (room: string) => `typing/room/${room}`,
  }
};