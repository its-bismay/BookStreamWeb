# BooKStream: App Hosting & Book Recommendation Platform 🚀

## Overview 📝

This project is an app hosting website that showcases a featured application along with the technologies used to build both the app and its backend. It provides a platform to present the app, highlight its main features, and demonstrate the tech stack and architecture behind its development.

## Features ✨

- 📢 **Share Recommendations:** Users can easily share their favorite books and recommendations with the community.
- 👀 **Watch Others' Recommendations:** Discover new books by browsing and watching recommendations shared by other users.
- 🔒 **Robust Authentication System:** Secure and seamless authentication ensures user data privacy and a safe experience.

## Screenshots 🖼️

Screenshots of the app can be found in the `public/` directory:

- 🏠 Home Screen: `public/homeSc_SS-portrait.png`
- ➕ Create Screen: `public/createSc_SS-portrait.png`
- 👤 Profile Screen: `public/profileSc_SS-portrait.png`
- 🔑 Login Screen: `public/login-portrait.png`

## Technology Stack 🛠️

### Frontend

- ⚛️ **React** (with TypeScript)
- ⚡ **Vite** (build tool)
- 🎨 **Tailwind CSS** (utility-first styling)
- 🎬 **Framer Motion** (animations)
- 🖌️ **Lucide React** (icons)
- 🧭 **React Router DOM** (routing)

### Mobile (Showcased)

- 📱 **React Native** (cross-platform mobile development)
- 🚀 **Expo** (mobile app development platform)
- 🐻 **zustand Toolkit** (state management)

### Backend (Showcased)

- 🚀 **Express.js** (web framework)
- 🍃 **MongoDB** (NoSQL database)
- 💚 **Node.js** (runtime)
- 🔐 **JWT** (authentication)

## Project Structure 🗂️

```
AppHostingSite/
├── public/                # Static assets and screenshots
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Main pages: Home, Client, Server
│   ├── index.css          # Tailwind CSS entry
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── vercel.json            # Vercel deployment config
└── ...
```

## Getting Started 🚦

### Prerequisites

- 🟢 [Node.js](https://nodejs.org/) (v16+ recommended)
- 📦 [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd AppHostingSite
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App Locally

- 🛠️ **Development mode:**

  ```bash
  npm run dev
  ```

  The app will be available at `http://localhost:5173` (or as specified by Vite).

- 🏗️ **Production build:**

  ```bash
  npm run build
  npm run preview
  ```

- 🧹 **Linting:**
  ```bash
  npm run lint
  ```

## Deployment 🚀

This project is configured for deployment on [Vercel](https://vercel.com/):

- The `vercel.json` file ensures all routes are handled by the SPA.
- To deploy, push your repository to GitHub and import it into Vercel.
- Vercel will automatically detect the Vite + React setup and deploy your app.

## Download the Mobile App 📲

You can download the BooKStream APK directly from the app or via the following link:
[Download APK](https://www.dropbox.com/scl/fi/32hwr2f2w10lt8w5xs69v/BooKStream.apk?rlkey=ayfspei0mrvz0t4aaqmyvvaqf&st=yisoslx4&dl=1)

## Credits & Links 🙌

- **Frontend Code:** [Book-recommend-app (GitHub)](https://github.com/its-bismay/Book-recommend-app)
- **Backend Code:** [Book-service-backend (GitHub)](https://github.com/its-bismay/Book-service-backend)
- **Author:** [Bismay Bibhabasu](mailto:bismaybibhabasu33@gmail.com)
- **Social:** [GitHub](https://github.com/its-bismay) | [X](https://x.com/RewatchRoom) | [Instagram](https://www.instagram.com/bismay_11)

---

> _BooKStream — Discover, track, and enjoy your reading journey with the power of modern web and mobile technology._
