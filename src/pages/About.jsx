import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="BusinessXstream" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At <b>BusinessXstream.com</b>, we specialize in empowering entrepreneurs and businesses to achieve their full potential. As a unit of <b>Thorondor Business Solutions Private Limited</b>, we bring a wealth of expertise, strategic insight, and innovative solutions to the table.</p>
              <p>Our mission is to simplify the journey of business growth and franchising by providing personalized support, actionable strategies, and cutting-edge tools. From crafting business plans to building franchise models, we partner with our clients at every step to ensure their success in today’s competitive market.</p>
              <b className='text-gray-800'>What We Offer</b>
              <ul className='list-disc list-inside text-gray-600'>
                  <li>Access to premium business opportunities.</li>
                  <li>Networking through exhibitions and workshops.</li>
                  <li>Expert consultation for start-ups and businesses facing mid-journey crises.</li>
              </ul>
          </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Expert Guidance:</b>
            <p className='text-gray-600'>We offer strategic insights and actionable plans to help businesses grow and scale efficiently.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Innovative Solutions:</b>
            <p className='text-gray-600'>Our cutting-edge tools and personalized support make business growth and franchising seamless.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trusted Network:</b>
            <p className='text-gray-600'>With access to premium opportunities and networking events, we help businesses connect and thrive.</p>
          </div>
      </div>

      
    </div>
  )
}

export default About;
