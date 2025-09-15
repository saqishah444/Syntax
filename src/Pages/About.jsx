import React from 'react'
import abouthero from '../assets/aboutherosection.png'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import { ArrowRight, Facebook, Twitter, Instagram, Dribbble, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div>


      <section id='hero'>
        <div className='container mx-auto'>
          <div className="flex flex-col items-center justify-center bg-white p-4">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center leading-snug mb-4">
              A Great user experience <br /> is <span className="text-purple-600">Our Priority</span>
            </h1>
            <p className="text-gray-600 text-[19px] text-center max-w-xl ">
              We create user experience with accessibility in mind.
              We are here to give modern solutions to the modern problems.
            </p>

            <img src={abouthero} alt="Priority Illustration" className="max-w-md w-full mb-3 md:mb-6" />
            <Link to='/work' className="mb-4 px-8 py-3 bg-pink-400 text-white rounded-full shadow hover:bg-pink-500 transition duration-300">
              Our Work
            </Link>
          </div>

        </div>

      </section>

      {/* About body */}
      <section id='about-body'>
        {/* first  */}
        <div className="w-full py-12  px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            {/* Left Content */}
            <div className="space-y-4 mt-0 md:mt-[-100px]">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                How we <span className='text-pink-400'>started</span>  doing <br /> what we <span className='text-pink-400'>love</span>
              </h2>
              <p className="text-gray-600 text-[20px] leading-relaxed">
                A website is something that gives you and your business a Web presence.
                Here at Syntrax, We exactly take care of that. We exactly take care of that.
              </p>
              <p className="text-gray-600 text-[20px] leading-relaxed">
                A website is something that gives you and your business a Web presence.
                Here at Syntrax, We exactly take care of that. We exactly take care of that.
              </p>
              <Link to='/work' className="bg-pink-400 text-white px-10 py-3 rounded-full text-[18px] font-medium shadow hover:bg-pink-600 transition">
                Our Work
              </Link>
            </div>

            {/* Right Image */}
            <div className=' '>
              <div className="flex ">
                <img
                  src={about1} // replace with your image path
                  alt="Web Development Illustration"
                  className="w-72 md:w-96 lg:w-[350px] h-96 mt-4 md:mt-16 drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>


         {/* second  */}
        <div className="w-full py-12  px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">

             {/* Left Image */}
            <div className=' '>
              <div className="flex justify-center">
                <img
                  src={about2} // replace with your image path
                  alt="Web Development Illustration"
                  className="w-72 md:w-96 lg:w-[350px] h-96   drop-shadow-lg"
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="space-y-4  mt-4 md:mt-16">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                We are Concerned about <br /> the <span className='text-pink-400'>End Product</span>
              </h2>
              <p className="text-gray-600 text-[20px] leading-relaxed">
                A website is something that gives you and your business a Web presence.
                Here at Syntrax, We exactly take care of that. We exactly take care of that.
              </p>
              <p className="text-gray-600 text-[20px] leading-relaxed">
                A website is something that gives you and your business a Web presence.
                Here at Syntrax, We exactly take care of that. We exactly take care of that.
              </p>
              <Link to='/work' className="bg-pink-400 text-white px-10 py-3 rounded-full text-[18px] font-medium shadow hover:bg-pink-600 transition">
                Our Work
              </Link>
            </div>

           
          </div>
        </div>

      </section>

      <section id="connect">
        <div>
          <div className="flex flex-col items-center justify-center py-0 md:py-40 bg-white">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
              Excited to work <span className='text-pink-400'>with</span> us ? <br /> Lets Connect
            </h1>
            <Link to='/contact' className="mt-6 px-8 py-3 text-[18px] font-semibold  bg-pink-400 text-white rounded-full shadow hover:bg-pink-500 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

      </section>

      {/* footer */}
      <section id="footer" className="bg-gray-100 py-10 px-4 sm:px-8 md:px-16 mt-3">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Syntrax Info */}
          <div className="flex flex-col items-start md:items-start text-center md:text-left">
            <h3 className="font-semibold  text-gray-900 text-2xl mb-2">Syntrax</h3>
            <p className="text-gray-800 text-[19px] mb-4 max-w-xs md:max-w-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo pulvinar sit sed eu nulla risus quis amet.</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl text-gray-900 w-full">
              <a href="#" aria-label="Facebook" className="hover:text-pink-400"><Facebook size={22} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-pink-400"><Twitter size={22} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400"><Instagram size={22} /></a>
              <a href="#" aria-label="Dribbble" className="hover:text-pink-400"><Dribbble size={22} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-pink-400"><Linkedin size={22} /></a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-start md:items-start text-center md:text-left">
            <h3 className="font-semibold text-2xl text-gray-900 mb-2">Contact</h3>
            <div className="flex items-center gap-2 text-gray-800 text-[19px] mb-2 justify-center md:justify-start w-full">
              <span><i className="far fa-envelope"></i></span>
              <span>contactatsytrax@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 text-[20px] justify-center md:justify-start w-full">
              <span><i className="fas fa-phone"></i></span>
              <span>+91 6266625558</span>
            </div>
          </div>
          {/* About Links */}
          <div className="flex flex-col items-start md:items-start text-center md:text-left">
            <h3 className="font-semibold text-2xl text-gray-900 mb-2">About</h3>
            <ul className="text-gray-800 text-[19px]  space-y-2">
              <li><Link to='/about' className="hover:underline hover:text-pink-400">About Us</Link></li>
              <li><Link to='/contact' className="hover:underline hover:text-pink-400">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 pt-6  text-gray-600 text-[14px]">
          <div className="flex items-center gap-2 mb-2 md:mb-0 justify-center md:justify-start w-full">
            <span><i className="far fa-copyright"></i></span>
            <span>2020 Syntrax.in All Rights Reserved.</span>
          </div>
        </div>
      </section>




    </div>
  )
}

export default About