import React from 'react'
import workheroimg from '../assets/workherosection.png'
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import { Link } from 'react-router-dom'
import { ArrowRight, Facebook, Twitter, Instagram, Dribbble, Linkedin } from "lucide-react";



const Work = () => {
  return (
    <div>
      <section id='hero'>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-4">
            What <span className="text-purple-600">we’ve</span> been working on
          </h1>
          <p className="text-gray-500 text-[22px] font-normal text-center max-w-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante lectus augue egestas sit morbi in tincidunt <br /> auctor sapien.
          </p>
          <img src={workheroimg} alt="Working Illustration" className="max-w-md w-full" />
        </div>
      </section>

      {/* Projects Grid */}


      <section id='projects'>
        <div className='container mx-auto mt-4 md:mt-10'>

           {/* Heading */}
          <div className=" mb-12 ml-3 md:ml-0">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
              Our recent work
            </h2>
            <p className="mt-4 text-[24px] text-gray-800 max-w-2xl active:bg-purple-600 ">
              Check out our recent work.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-8 py-3 rounded-full bg-transparent font-semibold text-[17px] text-purple-600 border border-purple-600 text-sm hover:bg-purple-600 hover:text-white transition">
                Website
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent font-semibold text-[17px] text-purple-600 border border-purple-600 text-sm hover:bg-purple-600 hover:text-white transition">
                UI/UX
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent font-semibold text-[17px] text-purple-600 border border-purple-600 text-sm hover:bg-purple-600 hover:text-white transition">
                PWA’s
              </button>
            </div>
          </div>
          <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {/* Project 1 */}
            <div>
              <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300  overflow-hidden">
                <a href="" className="">
                  <img
                    src={work1}
                    alt="SnapChat Clone"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-medium text-gray-900">Testcovid</h3>
                    <p className='text-gray-600'>Crossplateform app for Covid testing.</p>
                    <a
                      href="#"
                      className="text-sm text-purple-500 mt-2 inline-block hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="">
              <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300  overflow-hidden">
                <a href="">
                  <img
                    src={work3}
                    alt="Drumloop Production"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-medium text-gray-900">
                      Edubin
                    </h3>
                    <p className='text-gray-600'>Online e-learning mobile app.</p>
                    <a
                      href="#"
                      className="text-sm text-purple-500 mt-2 inline-block hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-0 md:mt-20">
            {/* Project 3 */}
            <div>
              <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300  overflow-hidden">
                <a href="">
                  <img
                    src={work2}
                    alt="Pagoda Partners"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-medium text-gray-900">Robert Berski</h3>
                    <p className='text-gray-600'>Portfolio for UI designer.</p>
                    <a
                      href="#"
                      className="text-sm text-purple-500 mt-2 inline-block hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div>
              <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300  overflow-hidden">
                <a href="">
                  <img
                    src={work4}
                    alt="E-learning App"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-medium text-gray-900">Fast Cart</h3>
                    <p className='text-gray-600'>Crossplateform E-commerce Plateform.</p>
                    <a
                      href="#"
                      className="text-sm text-purple-500 mt-2 inline-block hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

{/* connect section start */}
      <section id='connect'>
        <div className='container mx-auto py-5  md:py-52'>
          <div className=' text-center '>
            <h2 className='text-3xl md:text-5xl font-semibold mb-5 md:mb-10'>Got a <span className='text-purple-500'>Project</span>  for us ? Lets's  Connect</h2>
            <Link to="#" className="mt-6 px-8 py-3 text-[18px] font-semibold  bg-pink-400 text-white rounded-full shadow hover:bg-pink-500 transition duration-300">
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
              <li><a href="#" className="hover:underline hover:text-pink-400">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-pink-400">Contact us</a></li>
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

export default Work