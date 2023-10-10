import React from 'react'
import weather from '../assets/weather.png'
import flights from '../assets/plane2.png'
import events from '../assets/mic.png'
import customization from '../assets/customization.png'
import decoration from '../assets/plus.png'

function CategorySection() {
  return (
    <section className="container relative mx-auto mt-24">
      <div>
        {/* DECORATION */}
        <div>
          <img
            src={decoration}
            alt="Decoration image"
            className="absolute right-0 w-32"
          />
        </div>

        {/* SECTION TITLE */}
        <h3 className="text-lg text-center font-semibold text-my-paragraph">
          CATEGORY
        </h3>
        <h2 className="font-volkhov text-center font-bold text-5xl text-my-heading mt-3">
          We Offer Best Services
        </h2>

        {/* SECTION CARDS */}
        <div className="flex mt-16 gap-16">
          <div>
            <img src={weather} alt="Calculated Weather" className="w-24" />
            <h4 className="font-semibold text-lg text-my-heading my-6">
              Calculated Weather
            </h4>
            <p className="text-my-paragraph">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          <div>
            <img src={flights} alt="Calculated Weather" className="w-24" />
            <h4 className="font-semibold text-lg text-my-heading my-6">
              Best Flights
            </h4>
            <p className="text-my-paragraph">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <div>
            <img src={events} alt="Calculated Weather" className="w-24" />
            <h4 className="font-semibold text-lg text-my-heading my-6">
              Local Events
            </h4>
            <p className="text-my-paragraph">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
          <div>
            <img
              src={customization}
              alt="Calculated Weather"
              className="w-24"
            />
            <h4 className="font-semibold text-lg text-my-heading my-6">
              Customization
            </h4>
            <p className="text-my-paragraph">
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySection
