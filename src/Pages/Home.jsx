
import React from "react";
import { Button } from "antd";
import { ArrowRight, Facebook, Twitter, Instagram, Dribbble, Linkedin } from "lucide-react";
import homeheroimg from '../assets/homepage_hero.png'
import vector from '../assets/Vector.png'
import service1 from '../assets/services1.png'
import service2 from '../assets/services2.png'
import service3 from '../assets/services3.png'
import whatwedo1 from '../assets/whatwedo1.jpg'
import whatwedo2 from '../assets/whatwedo2.jpg'
import whatwedo3 from '../assets/whatwedo3.jpg'
import whatwedo4 from '../assets/whatwedo4.jpg'



const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="px-6 md:px-16 py-2">
          <div className="grid grid-cols-1 ">
            {/* Top Content */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
                We Help People To <br />
                Shine <span className="text-purple-800">Online</span>
              </h2>

              <p className="mt-4 text-gray-600 text-sm md:text-base">
                We are here to help <span className="font-semibold text-purple-800">YOU</span> and{" "}
                <span className="font-semibold text-purple-800">YOUR</span> business to grow and shine
                online.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  className=" py-3 px-8 text-white rounded-full bg-pink-400 hover:bg-pink-500 border-none font-semibold"
                >
                  See How
                </button>

                <button className="flex items-center justify-center gap-2 text-purple-800 text-[20px] font-semibold hover:underline">
                  Lets connect <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <div className="relative w-full h-fit flex items-center justify-center bg-white">
                {/* Background Vector */}
                <img
                  src={vector}
                  alt="Background vector"
                  className="absolute  w-fit h-fit "
                />

                {/* Main Illustration */}
                <img
                  src={homeheroimg}
                  alt="Hero illustration"
                  className="relative mb-32 w-fit h-fit"
                />
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Hero Section End             */}

      {/* Service Section Start */}
      <section id="sevices">
        <div className=" px-6 md:px-12 lg:px-24">
          {/* Heading */}
          <div className=" mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Services that will help <br />
              <span className="text-indigo-600 font-semibold">Your Buiseness</span>
            </h2>
            <p className="mt-4 text-[20px]  text-gray-800 max-w-2xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere diam
              amet lacus in. Sed nibh eget lacinia nunc.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-0 md:mt-32">
            {/* Card 1 */}
            <div className="my-[10px] md:my-0">
              <div className="bg-gray-100 px-20 w-80 py-24 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-xl transition">
                <img
                  src={service1}
                  alt="UI/UX Design"
                  className="w-28 h-28 mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900">UI/UX Design</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mt-0 md:mt-[-60px]">
              <div className="bg-gray-100 px-20 w-80 py-24 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-xl transition">
                <img
                  src={service2}
                  alt="Web Development"
                  className="w-28 h-28 mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900">Web Development</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="my-[10px] md:my-0">
              <div className="bg-gray-100 px-16 w-80 py-24 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-xl transition">
                <img
                  src={service3}
                  alt="Progressive Web Apps"
                  className="w-28 h-28 mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900">Progressive Web Apps</h3>
              </div>
            </div>
          </div>


        </div>
      </section>


      {/* Work section start */}
      <section id="work">
        <div className="py-16 px-6 md:px-12 lg:px-24">
          {/* Heading */}
          <div className=" mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Let’s see <span className="text-purple-800">what</span> we’ve been{" "}
              <br /> working on
            </h2>
            <p className="mt-4 text-[20px] text-gray-800 max-w-2xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere diam
              amet lacus in. Sed nibh eget lacinia nunc.
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

          {/* Projects Grid */}
          <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              {/* Project 1 */}
              <div>
                <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300 rounded-lg overflow-hidden">
                  <a href="" className="">
                    <img
                      src={whatwedo1}
                      alt="SnapChat Clone"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">SnapChat Clone</h3>
                      <a
                        href="#"
                        className="text-sm text-indigo-600 mt-2 inline-block hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="">
                <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300 rounded-lg overflow-hidden">
                  <a href="">
                    <img
                      src={whatwedo3}
                      alt="Drumloop Production"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Drumloop Production
                      </h3>
                      <a
                        href="#"
                        className="text-sm text-indigo-600 mt-2 inline-block hover:underline"
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
                <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300 rounded-lg overflow-hidden">
                  <a href="">
                    <img
                      src={whatwedo2}
                      alt="Pagoda Partners"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">Pagoda Partners</h3>
                      <a
                        href="#"
                        className="text-sm text-indigo-600 mt-2 inline-block hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div>
                <div className="bg-white w-72 shadow-md hover:shadow-lg hover:translate-y-[-10px] duration-300 rounded-lg overflow-hidden">
                  <a href="">
                    <img
                      src={whatwedo4}
                      alt="E-learning App"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">E-learning App</h3>
                      <a
                        href="#"
                        className="text-sm text-indigo-600 mt-2 inline-block hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className=" py-3 px-16 mt-5 md:mt-10 text-white rounded-full bg-pink-400 hover:bg-pink-500 border-none font-semibold transition-all duration-300"
            >
              More
            </button>
          </div>
        </div>

      </section>
      <section id="connect">
        <div>
          <div className="flex flex-col items-center justify-center py-0 md:py-40 bg-white">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              We can’t wait to work <br /> with <span className="text-purple-600">You</span>
            </h1>
            <button className="mt-6 px-8 py-3 text-[18px] font-semibold  bg-pink-400 text-white rounded-full shadow hover:bg-pink-500 transition duration-300">
              Lets connect
            </button>
          </div>
        </div>

      </section>
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

export default Home