import React from 'react'
import Nav from './components/Nav'
import Hero from './views/Hero'
import Launchpad from './views/Launchpad'
import Rocket from './views/Rocket'

import { Parallax } from 'react-scroll-parallax'



const App = () => {
  return (
    <>
      <Nav />
      <Hero />

      <Rocket />
      <Launchpad />

    </>
  )
}

export default App