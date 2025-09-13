
import React from "react";
import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import homeheroimg from '../assets/homepage_hero.png'
import vector from '../assets/Vector.png'
import service1 from '../assets/services1.png'
import service2 from '../assets/services2.png'
import service3 from '../assets/services3.png'

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



    </div>
  )
}

export default Home