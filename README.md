# Elderberry – Basic Meeting Script

Elderberry is a basic meeting script, with audio, video, and screen sharing. It is based on mediasoup and uses `getUserMedia` underneath.

## Alternative Option
If you need multiple meeting rooms, consider purchasing [Argan](https://codecanyon.net/item/argan-enterprise-meetings-platform-with-messaging-chat-audio-and-video-via-getusermedia/42356636) instead.

## Live Preview
Since Elderberry is a single meeting script, the live preview is a common meeting room where other users may be present. Be cautious when enabling your camera or microphone.

For full privacy, you can use the Argan live preview, which has the same UI and functionality but ensures private access.

## News
- Argan is now 100% TypeScript-based and fully covered by ESLint (Airbnb configuration).

## Requirements
- A private server or cloud instance with at least **2GB of RAM**.
- Fully automated installation script available for **Ubuntu 24.04 LTS, 22.04 LTS, 20.04 LTS, and 18.04 LTS**.

## Features
Elderberry is a lightweight yet powerful meeting script. Key capabilities include:

- Material UI v5 (MUI) user interface
- "Join the meeting" form with input fields and settings
- Grid meeting layout (**UI Matrix**)
- Pinned meeting layout with side grid (**UI Pinned**)
- Video cover/contain button
- Screen sharing support
- Meeting drawer with show/hide controls for each peer
- Mobile Safari support for iOS (iPhone and iPad)
- Mobile Chrome support for Android
- Gravatar profile pictures

## Framework and Libraries
Elderberry is built using:
- **Frontend**: React / Redux
- **Backend**: Node.js
- **Real-time communication**: Socket.IO and mediasoup WebRTC

**Note:** Mediasoup is more stable than standard WebRTC and does not require a STUN/TURN server.

---

For further details and installation instructions, please refer to the official documentation.

