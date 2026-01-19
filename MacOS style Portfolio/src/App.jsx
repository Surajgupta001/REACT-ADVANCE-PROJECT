import React from 'react'
import { Dock, Home, Navbar, Welcome } from './components'
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
      <Home />
    </main>
  )
}

export default App
