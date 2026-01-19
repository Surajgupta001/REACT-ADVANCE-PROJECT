import React from 'react'
import { Dock, Navbar, Welcome } from './components'
import gsap from 'gsap'
import { Draggable } from 'gsap/draggable';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from './windows';
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
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  )
}

export default App
