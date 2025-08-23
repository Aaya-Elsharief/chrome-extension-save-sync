# Save & Sync Anything – Chrome Extension + NestJS + MongoDB

## 📌 Overview

A full-stack project combining a Chrome Extension frontend with a NestJS + MongoDB backend.
This extension allows users to save selected text, links, or notes from any webpage and sync them across devices via a secure backend API.

## 🚀 Features

- Save selected text or links from any webpage.

- Sync notes to a NestJS + MongoDB backend.

- View and manage saved notes from the popup UI.

- Offline mode with local storage.

- Optional user authentication.

## 🛠 Tech Stack

#### Frontend (Chrome Extension)

- Manifest V3

- TypeScript, HTML, CSS

- Chrome APIs (storage, contextMenus, tabs, messaging)

### Backend (NestJS)

- TypeScript

- MongoDB + Mongoose

- REST API

- Hosted on Render

## 📂 Project Structure
```
chrome-extension-save-sync/
│
├── backend/       # NestJS + MongoDB API
├── extension/     # Chrome extension frontend
└── README.md
```

## 📦 Installation
1️⃣ Clone the repository
```
git clone https://github.com/yourusername/chrome-extension-save-sync.git
cd chrome-extension-save-sync
```

2️⃣ Setup Backend
```
cd backend
npm install
npm run start:dev
```

Create a .env file:
```
MONGODB_URI=your_mongodb_uri
PORT=5000
```

3️⃣ Setup Extension Frontend
```
cd ../extension
npm install
```

## 🖥 Development
### Run Backend Locally
```
cd backend
npm run start:dev
```
### Load Extension into Chrome

- Go to `chrome://extensions/`

- Enable Developer Mode

- Click Load Unpacked

- Select the extension folder
