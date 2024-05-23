// import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa"
import { FaLocationArrow } from "react-icons/fa6"

const FooterLinks=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blogs",
        link:"/#blog",
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 ml-5 mr-5 pb-20 pt-5">
            {/* COMPANY DETAILS */}
            <div className="mt-7 ml-4 items-stretch">
            <a href='#' className="text-primary_red font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
              sonic</a>
              <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                Where Premium Sound meets Cutting-Edge Tech. Experience the sound of Innovation with Sonic.
              </p>
              <p className='text-gray-900 mt-4 dark:text-white'>
                Made by Biswajyoti Sahoo</p>
            </div>

            {/* FOOTER LINKS */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10  ">
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3 ">Important Links</h1>
                    <ul className="space-y-3">
                        {FooterLinks.map((data,index)=>(
                            <li key={index}>
                                <a href={data.link}
                                className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300 ">
                                    {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            {/* Quick COL LINKS */}
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3 ">Quick Links</h1>
                    <ul className="space-y-3">
                        {FooterLinks.map((data,index)=>(
                            <li key={index}>
                                <a href={data.link}
                                className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300 ">
                                    {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* COMPANY ADDRESS */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                <div>
                    <div className="flex  items-center gap-3">
                        <FaLocationArrow/>
                        <p>Bhubaneswar, Odisha, India</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <FaMobileAlt/>
                        <p>+91 1223334444</p>
                    </div>
                    {/* SOCIAL LINKS */}
                    <div className="flex items-start gap-6  mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl hover:text-primary_red duration-300"/>
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl hover:text-primary_red duration-300"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl hover:text-primary_red duration-300"/>
                        </a>
                    </div>

                </div>
            </div>
            </div>
  
            </div>
           
        </div>
    </div>
  )
}

export default Footer
