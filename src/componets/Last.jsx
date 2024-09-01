import React from 'react'

const Last = () => {
  return (
    <div className='bg-white text-black py-10' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Why Us</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={"https://luxewalls.com.au/wp-content/uploads/2017/01/588961cf40a0e.jpg"} alt="" className='w-72 h-80 rounded object-cover md-8 md:mb-0' />
            <p>
            Cybercriminals exploit vulnerabilities to steal information, money, and disrupt essential services. Their attacks can have serious consequences for national security.
Financial Impact: Cybercrime costs organizations tens or even hundreds of millions of dollars. Beyond financial losses, critical infrastructure, societal cohesion, and mental well-being are also at risk.
Malware, Phishing, and Ransomware: These threats compromise systems, steal data, and demand ransom payments,
            </p>
        </div>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={"https://luxewalls.com.au/wp-content/uploads/2017/01/588961cf40a0e.jpg"} alt="" className='w-72 h-80 rounded object-cover md-8 md:mb-0' />
            <p>
            In this perilous digital landscape teeming with scam artists and hackers, we’re not just here to address your tech issues. Our mission extends beyond that: we’re committed to ensuring your safety in every conceivable way. Rest assured, we rely on tried-and-tested processes to deliver optimal results.
            </p>
        </div>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={"https://luxewalls.com.au/wp-content/uploads/2017/01/588961cf40a0e.jpg"} alt="" className='w-72 h-80 rounded object-cover md-8 md:mb-0' />
            <p>
            At our agency, we’re not only here to address your tech issues; we’re also committed to safeguarding your privacy. Feel free to reach out anytime for assistance—we’re available 24/7. Our dedication to your goals is unwavering, and our pricing varies based on market conditions, project complexity, and client budget. Effective communication and teamwork are our cornerstones. With our small, dedicated team, our sole focus is delivering your project with a professional touch. Don’t hesitate-contact us right away!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Last

