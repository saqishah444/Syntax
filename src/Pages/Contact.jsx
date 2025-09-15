import React from 'react'
import contact from '../assets/contactpage.png'
import { ArrowRight, Facebook, Twitter, Instagram, Dribbble, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div>

      <section id='main'>
        <div className='container mx-auto'>
          <div className=" px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Contact Form */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Let’s Get Connected
          </h2>
          <p className="mt-2 text-[25px] text-gray-600">
            Let’s Get Connected And Make That{" "}
            <span className="text-indigo-600 font-medium">Dream Project Of Your’s</span>
          </p>

          {/* Form */}
          <form className="mt-8 space-y-10">
            {/* Name */}
            <div>
                <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
              />
            </div>

            {/* Email */}
            <div>
             
              <input
                type="Email"
                placeholder="Email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="1"
                placeholder="Message"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="px-10 py-3 bg-pink-400 text-[20px] font-semibold text-white rounded-full hover:bg-pink-500 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={contact}
            alt="Contact Illustration"
            className="w-72 md:w-full transform scale-x-[-1]"
          />
        </div>
      </div>
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

export default Contact