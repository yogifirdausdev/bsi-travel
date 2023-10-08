import React from 'react'
import blob from '../assets/blob.svg'
import Nav from '../components/Nav'

function Hero() {
  return (
    // HERO SECTION
    <header>
      <img
        src={blob}
        alt="Background Blob"
        className="absolute top-0 -right-24"
      />

      <Nav />

      <div className="h-[10000px]"></div>
    </header>
  )
}

export default Hero
