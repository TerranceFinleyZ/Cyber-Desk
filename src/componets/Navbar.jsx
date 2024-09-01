import React from "react"

const Navbar = () => {
    return (
      <nav className='bg-whtie text-black px-8 md:px-16 lg:px-24'>
          <div className="container py-2 flex justify-center md:justify-between items-center">
              <div className="text-2xl font-bold hidden md:inline">Cyber Desk</div>
              <div className="space-x-6">
                  
              </div>
              <a href="https://www.facebook.com/imperialworld.2023" className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black hidden md:inline
              trabsform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Us</a>
          </div>
      </nav>
    )
  }
  
  export default Navbar