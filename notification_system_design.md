# Stage 7 - Frontend Architecture

## Overview

The frontend is responsible for displaying notifications to users and interacting with backend APIs. It is built using React and follows a component-based architecture.

---

## Folder Structure

```plaintext
frontend/
│
├── src/
│   ├── components/
│   │     ├── NotificationCard.jsx
│   │     ├── NotificationList.jsx
│   │
│   ├── pages/
│   │     ├── NotificationsPage.jsx
│   │
│   ├── services/
│   │     ├── api.js
│   │
│   ├── hooks/
│   │     ├── useNotifications.js
│   │
│   ├── sockets/
│   │     ├── socket.js
│   │
│   ├── App.js
│   └── index.js