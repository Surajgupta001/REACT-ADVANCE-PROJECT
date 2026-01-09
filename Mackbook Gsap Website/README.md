# MacBook Pro GSAP Showcase Website

This project is a high-fidelity, interactive product showcase website for the MacBook Pro, built using **React**, **Three.js**, and **GSAP**. It features a stunning 3D model viewer, smooth scroll-based animations, and dynamic product customization.

## 🚀 Overview

The goal of this project is to replicate the premium feel of Apple's product landing pages. It leverages advanced web technologies to provide an immersive user experience. Users can explore 3D models of the MacBook, witness performance highlights through scroll interactions, and see dynamic content updates.

## ✨ Features

- **Interactive 3D Model**: a fully interactive 3D MacBook Pro model rendered using **React Three Fiber**.
- **Smooth Animations**: High-performance scroll-driven animations powered by **GSAP (GreenSock Animation Platform)** and ScrollTrigger.
- **Product Customization**: Dynamic state management allows users to interact with the model (changing video textures on the screen, etc.).
- **Responsive Design**: Built with **Tailwind CSS** for a fully responsive layout across different screen sizes.
- **Modern Tech Stack**: Utilizes the latest React features and Vite for a fast development experience.

## 🛠️ Tech Stack

### Frontend Framework

- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.

### 3D & Graphics

- **[Three.js](https://threejs.org/)**: JavaScript 3D Library.
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: A React renderer for Three.js.
- **[React Three Drei](https://github.com/pmndrs/drei)**: Useful helpers for React Three Fiber.

### Animations

- **[GSAP](https://gsap.com/)**: Professional-grade JavaScript animation for the modern web.
- **ScrollTrigger**: GSAP plugin for scroll-based animations.

### Styling & UI

- **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[clsx](https://github.com/lukeed/clsx)**: A tiny utility for constructing `className` strings conditionally.

### State Management

- **[Zustand](https://github.com/pmndrs/zustand)**: A small, fast, and scalable bearbones state-management solution. Used here to manage the 3D model's state (color, scale, screen texture).

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets
├── components/      # React components
│   ├── constants/   # Data constants
│   ├── models/      # 3D Model components (Macbook-14/16)
│   ├── three/       # Three.js scene components (Lights, Switcher)
│   └── ...          # UI Sections (Hero, Features, Highlights, etc.)
├── store/           # Zustand store for global state
├── App.jsx          # Main application component layout
└── main.jsx         # Entry point
public/
├── models/          # GLB/GLTF 3D model files
└── videos/          # Video textures for the laptop screen
```

## 📦 Installation & Usage

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd mackbook-gsap-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
