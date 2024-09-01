import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='bg-white text-black text-center py-16'>
      <h1 className='text-9xl font-bold py-16' >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-blue-300'>Cyber Desk</span>
      </h1>
      <p className='mt-4 text-lg text-gray-500 px-4 md:px-32'>
        Think of us as your personal Help-desk!
      </p>
    </div>
  )
}

export default Hero
