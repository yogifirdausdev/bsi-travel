import React from 'react'
import logo from '../assets/jadoo.png'

function Nav() {
  return (
    <nav className="white py-6 ">
      <div className="flex justify-between items-center container mx-auto ">
        <img src={logo} alt="Jadoo logo" />

        <ul className="flex gap-6">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
        </ul>

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
    </nav>
  )
}

export default Nav
