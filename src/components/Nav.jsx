import React from 'react'
import logo from '../assets/jadoo.png'

function Nav() {
  return (
    <nav className="white py-6 z-50 ">
      <div className="flex justify-between items-center container mx-auto ">
        <div>
          <img src={logo} alt="Jadoo logo" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-6 items-center">
            <li>Login</li>
            <li>
              <button className="border border-black py-2 px-6 rounded-md">
                Sign up
              </button>
            </li>
            <li>
              <select name="language" id="language" className="bg-transparent">
                <option value="En">En</option>
                <option value="Id">Id</option>
                <option value="My">My</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
