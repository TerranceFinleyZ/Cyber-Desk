import React from 'react'
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Cyber Security',
        description: 'Our team will conduct ethical hacking to test your company’s security.',
    },
    {
        id: 2,
        title: 'Dark Web Scan',
        description: 'Do you think your private information has been compromised? Let us help you.',
    },
    {
        id: 3,
        title: 'Bitcoin',
        description: 'Have you ever wanted to create your own Bitcoin and potentially make billions!',
    },
    {
        id: 4,
        title: 'Video Editing',
        description: 'Don’t have time to edit videos all day? We’ve got you covered!',
    },
    {
        id: 5,
        title: 'Web Design',
        description: 'Need a website? Our team at MEZA.LLC would love to help you with all your software needs.',
    },
    {
        id: 6,
        title: 'Help Desk',
        description: 'If you have a project that needs assistance or completion, contact us. We’d love to take a look and see how we can help.',
    },
];

const Services = () => {
  return (
    <div className='bg-white text-black py-6' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map(service => (
                <div 
                    key={service.id}
                    className='bg-gray-500 px-6 pb-6 rounded-lg hover:shadow-lg transform
                    transition-transform duration-300 hover:scale-105'
                >
                  <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                    bg-grandient-to-r from-gray-100 to-blue-300'
                  >
                    {service.id}
                  </div>
                  <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-blue-600'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-gray-200'>{service.description}</p>
                  <div className='mt-4 inline-block text-yellow-200 hover:text-blue-500'></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services
