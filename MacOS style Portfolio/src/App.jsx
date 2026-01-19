import React from 'react'
import { Dock, Navbar, Welcome } from './components'
import gsap from 'gsap'
import { Draggable } from 'gsap/draggable';
import { Resume, Safari, Terminal } from './windows';
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
    </main>
  )
}

export default App
