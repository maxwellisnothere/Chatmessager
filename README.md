# 💬 PHAM - Real-time MQTT Messenger
> **แอปพลิเคชันแชทอัจฉริยะที่ขับเคลื่อนด้วยโปรโตคอล MQTT เชื่อมต่อรวดเร็วในระดับ Milliseconds**

เข้าไปคุยกันเองได้ ทดสอบว่าได้จริง
https://chatmessager-9ewi.vercel.app


![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MQTT](https://img.shields.io/badge/MQTT-3C3C3C?style=for-the-badge&logo=mqtt&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🌟 จุดเด่นของโปรเจกต์ (Project Highlights)

* **⚡ Ultra-Low Latency:** ใช้เทคโนโลยี MQTT ผ่าน WebSockets เพื่อการรับส่งข้อความที่เร็วที่สุด
* **📱 Cross-Platform:** พัฒนาด้วย Expo รองรับทั้ง Web, Android และ iOS
* **📡 Scalable Broker:** เชื่อมต่อผ่าน HiveMQ Cloud มั่นใจได้ในเรื่องความเสถียร
* **🎨 Modern UI:** ออกแบบหน้าจอให้ใช้งานง่าย รองรับการแสดงผลแบบ Responsive

---

## 🚀 ฟีเจอร์การใช้งาน (Core Features)

| ฟีเจอร์ | คำอธิบาย |
| :--- | :--- |
| **Global Lobby** | เข้าห้องแชทกลางเพื่อคุยกับทุกคนในระบบ |
| **Private Chat** | ระบบ DM (Direct Message) ส่วนตัวที่ใช้ระบบ Sort Topic อัจฉริยะ |
| **Typing Status** | แสดงสถานะ "กำลังพิมพ์..." แบบเรียลไทม์ |
| **User Presence** | ติดตามสถานะออนไลน์/ออฟไลน์ของผู้ใช้งาน |

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

* **Frontend Framework:** React Native (Expo Router)
* **Protocol:** MQTT.js v5.x
* **Cloud Broker:** HiveMQ Cloud
* **Styling:** StyleSheet (React Native Native Component)
* **Hosting:** Vercel (Web Platform)

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
├── app/               # หน้าจอหลักและระบบ Routing (Login, Chat)
├── components/        # ส่วนประกอบ UI (MessageBubble, InputField)
├── constants/         # การตั้งค่า MQTT และ Topic Config
├── hooks/             # Custom Hooks สำหรับจัดการ MQTT Logic
└── assets/            # ทรัพยากรภาพและไอคอนต่างๆ
⚙️ การติดตั้งและรันโปรเจกต์ (Setup & Installation)
Clone Repository:

Bash
git clone [https://github.com/maxwellisnothere/Chatmessager.git](https://github.com/maxwellisnothere/Chatmessager.git)
Install Dependencies:

Bash
npm install
Environment Setup:
สร้างไฟล์ .env และใส่ค่า Config ของคุณ:

ข้อมูลโค้ด
EXPO_PUBLIC_MQTT_USER=your_username
EXPO_PUBLIC_MQTT_PASSWORD=your_password
Start Project:

Bash
npx expo start
🌐 การเผยแพร่ (Deployment)
โปรเจกต์นี้ได้รับการ Deploy ผ่าน Vercel โดยใช้คำสั่ง:
npx expo export --platform web และตั้งค่า Output Directory ไปที่ dist

🧑‍💻 พัฒนาโดย (Contributor)
Maxwell - Student at Sripatum University (Computer Engineering)

GitHub: @maxwellisnothere

"Building the future of communication, one message at a time." 🚀


---

### 💡 คำแนะนำเพิ่มเติมเพื่อความ "เท่" แบบมืออาชีพ:

1.  **ใส่ Screenshots:** หากมีเวลา พี่แนะนำให้แคปภาพหน้าจอแอปตอนรันจริง (หน้า Login และหน้า Chat) แล้วเอามาใส่ไว้ใต้หัวข้อ **Project Highlights** ค่ะ (อ้างอิงตาม *GitHub Guide: Mastering Markdown* รูปภาพจะช่วยดึงดูดสายตาได้ดีที่สุด)
2.  **Badges:** พี่ใส่ Badges จาก [Shields.io](https://shields.io/) ให้แล้ว ซึ่งเป็นที่นิยมมากในหมู่ Open Source Developer ค่ะ
3.  **License:** หากคุณต้องการให้คนอื่นนำไปใช้ต่อได้ อย่าลืมเพิ่มไฟล์ `LICENSE` (เช่น MIT License) ในโปรเจกต์นะคะ จะช่วยให้ Repo ดูสมบูรณ์ขึ้นค่ะ

ตอนนี้หน้าเว็บบน Vercel รันได้ปกติหรือยังคะ? ถ้ามี Error ตัวไหนเด้งขึ้นมาอีก บอกพี่ได้เลยนะคะ เดี๋ยวเรามาจัดการให้เรียบร้อยกันค่ะ! 😊✨
