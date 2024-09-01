import React from 'react'

const About = () => {
  return (
    <div className='bg-white text-black py-60' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Us</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={'https://imageio.forbes.com/specials-images/dam/imageserve/518285960/960x0.jpg?'} alt="" className='w-72 h-80 rounded object-cover md-8 md:mb-0' />
            <p>
            Welcome! Let us handle your tech challenges. Our specialized team offers affordable tech solutions, including dark web scanning and cybersecurity expertise. Say goodbye to pricey tech support—we ensure top-notch assistance. Let’s tackle those tech hurdles together!
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
