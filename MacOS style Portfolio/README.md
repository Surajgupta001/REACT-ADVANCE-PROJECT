# MacOS Style Portfolio

An interactive, MacOS-inspired portfolio built with React and Tailwind CSS v4. It emulates a desktop UI with a Dock, draggable windows, and desktop folders that open rich content (Finder, Safari, Photos, Terminal, Resume, Contact, Text/Image viewers).

## 🚀 Overview

The goal is to deliver a premium, desktop-like experience where content opens inside animated, draggable windows. A Dock toggles apps, desktop folders launch project views, and files open in dedicated viewers — all while staying responsive across devices.

## ✨ Features

- MacOS-like Dock with hover animation and tooltips
- Draggable, animated windows with focus management via `WindowWrapper`
- Finder with side navigation (Favorites, Projects) and clickable files
- Text viewer (name, optional image/subtitle, paragraphs)
- Image viewer (title + preview)
- Photos gallery (click to open in Image window)
- Resume window using a local PDF rendered via `react-pdf`
- Terminal window that lists categorized tech stack
- Fully responsive layout; windows center and expand on small screens

## 🛠️ Tech Stack

### Frontend Framework

- **[React 19](https://react.dev/)**: Core UI library powering components, state, and the desktop-like interface.
- **[Vite](https://vitejs.dev/)**: Fast dev server and build tooling for a smooth developer experience.

### Animations

- **[GSAP](https://gsap.com/)** + **[@gsap/react](https://www.npmjs.com/package/@gsap/react)**: High-performance animations and React-friendly hooks.
- **Draggable**: GSAP plugin enabling natural, physics-like window dragging.

### Styling & UI

- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first styling with responsive breakpoints and modern syntax.
- **[clsx](https://github.com/lukeed/clsx)**: Lightweight helper to compose conditional `className` strings.
- **[lucide-react](https://lucide.dev/)**: Clean, consistent icon set used across window headers and controls.

### State Management & Docs

- **[Zustand](https://github.com/pmndrs/zustand)**: Lightweight global store for windows (open/close, z-index, data) and active locations.
- **[react-pdf](https://github.com/wojtekmaj/react-pdf)**: Renders the Resume PDF directly in a React window.

## 📂 Project Structure

```bash
MacOS style Portfolio/
├── public/
│   ├── files/           # e.g., resume.pdf
│   ├── icons/           # UI icons
│   └── images/          # Gallery & UI images
└── src/
    ├── components/      # Dock, Navbar, Welcome, Home, WindowControls
    ├── constants/       # locations, dock apps, posts, WINDOW_CONFIG
    ├── hoc/             # WindowWrapper (drag + focus + entry animation)
    ├── store/           # Zustand stores: window.js, location.js
    ├── windows/         # Finder, Safari, Photos, Terminal, Resume, Contact, Text, Image
    ├── App.jsx          # Mounts components and windows
    ├── index.css        # Tailwind + component styles (responsive)
    └── main.jsx         # Entry
```

## 📦 Installation & Usage

1. **Clone & Install**

   ```bash
   cd "MacOS style Portfolio"
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Interact**

   - Use the Dock to toggle windows (Finder, Safari, Photos, etc.)
   - Click desktop folders to open project-specific Finder views
   - In Finder, click files to open viewers (`txtfile`, `imgfile`, `pdf`, external links)
   - Open Photos and click any image to preview in the Image window

## ⚙️ Configuration Notes

- Path alias `#` is set via `jsconfig.json` to resolve `#/components`, `#/constants`, `#/store`, etc.
- Window state derives from `WINDOW_CONFIG` in `src/constants/index.js` and is managed by `useWindowStore`.
- Folder/project metadata lives in `locations` inside `src/constants/index.js`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🗺️ Roadmap (Optional)

- Accessibility: focus trapping, keyboard navigation, ARIA roles
- Touch optimizations for drag/gesture handling
- Lazy-load windows to reduce initial bundle size
- Virtualize large galleries for performance
