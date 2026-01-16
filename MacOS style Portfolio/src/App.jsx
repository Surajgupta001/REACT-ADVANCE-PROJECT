import React from 'react'
import { Dock, Navbar, Welcome } from './components'
import gsap from 'gsap'
import { Draggable } from 'gsap/draggable';
import { Terminal } from './windows';
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  )
}

export default App
