import React from 'react'
import Nav from '../components/Nav'
import { FaCirclePlay } from 'react-icons/fa6'
import blob from '../assets/blob.svg'
import traveller from '../assets/traveller.png'
import plane from '../assets/plane.png'

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

      <div className="container mx-auto">
        <div className="flex justify-between ">
          {/* LEFT HERO */}
          <div className="w-1/2 mt-16">
            <h3 className="text-my-secondary font-bold text-xl">
              BEST DESTINATIONS AROUND THE WORLD
            </h3>
            <h1 className="mt-6 font-volkhov text-[80px] tracking-tighter leading-[89px]">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="w-4/5 mt-8 text-my-paragraph">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center mt-8">
              <button className=" bg-my-primary hover:bg-my-secondary text-white rounded-lg p-3 mr-11">
                Find out more
              </button>
              <button className="flex items-center gap-4">
                <FaCirclePlay className="text-[52px] text-my-secondary" />
                <p className="text-my-paragraph">Play Demo</p>
              </button>
            </div>
          </div>
          {/* RIGHT HERO */}
          <div className="w-1/2 relative pr-4">
            <img
              src={traveller}
              alt="Traveller"
              className="max-w-[600px] absolute right-6 z-40"
            />
            <img
              src={plane}
              alt="Plane"
              className="h-32 absolute right-0 top-24"
            />
            <img src={plane} alt="Plane" className="h-32 absolute top-8" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
