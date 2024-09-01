import React from 'react'

const projects = [
    {
        id: 1,
        name: 'Cyber-Security',
        technologies: 'Github',
        image: "https://miro.medium.com/v2/resize:fit:940/1*HvMe_qYPQ1KZOCRN5K8GHQ.png",
        github: 'https://github.com/TerranceFinleyZ',
    },
    {
        id: 2,
        name: 'Bitcoin',
        technologies: 'Engineer',
        image: "https://wallpapercave.com/wp/wp2054362.jpg",
        github: 'https://terrancefinley.online/',
    },
    {
        id: 3,
        name: 'Web-Design',
        technologies: 'MEZA.LLC',
        image: "https://www.elinext.com/wp-content/uploads/2020/05/Web-Design-Development-Advanced-Based-scaled.jpg",
        github: 'https://meza-web.netlify.app/',
    },
]

const Projects = () => {
  return (
    <div className='bg-white text-yellow-300 py-60' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Popular</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt={project.name} className='rounded-lg mb-4
                    w-full h-48 object-cover' />
                    <h3 className='text-2xl font-bold mb-2 text-white '>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className='inline-block bg-gradient-to-r
                    from-gray-100 to-blue-300 text-white px-4 py-2 rounded-full' traget='_blank' rel='noopener noreferrer'>Check-out</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
