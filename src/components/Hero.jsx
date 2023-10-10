import React from 'react'
import Nav from '../components/Nav'
import { FaCirclePlay } from 'react-icons/fa6'
import traveller from '../assets/traveller.png'
import plane from '../assets/plane.png'
import blob from '../assets/blob.svg'

function Hero() {
  return (
    // HERO SECTION
    <header>
      <img
        src={blob}
        alt="Background Blob"
        className="absolute top-0 -right-24 -z-10"
      />

      <Nav />

      <div className="container mx-auto mt-12">
        <div className="flex justify-between">
          {/* LEFT */}
          <div className="w-1/2">
            <h3 className="font-bold text-my-secondary">
              Best Destinations around the world
            </h3>
            <h1 className="font-volkhov font-bold text-[80px] tracking-tighter leading-[89px] mt-6">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="text-my-paragraph mt-6">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.≈
            </p>
            <div className="flex items-center mt-8">
              <button className="bg-my-primary font-semibold text-lg p-3 rounded-lg text-white">
                Find out more
              </button>
              <button className="flex items-center ml-6 gap-5">
                <FaCirclePlay className="text-[52px] text-my-secondary" />
                <p className="text-my-paragraph">Play Demo</p>
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/2 relative pr-4">
            <img src={traveller} alt="" className="w-[600px] z-40" />
            <img src={plane} alt="" className="absolute h-32 right-0 top-20" />
            <img src={plane} alt="" className="absolute h-32 left-8 top-10" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
