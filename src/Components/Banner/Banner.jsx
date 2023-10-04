import React from 'react';
import picture from '../../assets/images/girl-3.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
       <>
       
        <section className="container mx-auto bg-transparent text-gray-100">
                <h1 className="text-5xl text-center	 font-bold leadi sm:text-4xl">ABOUT ME</h1>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={picture} alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">Hi! I'm a 
                            <span className="text-violet-400"> MERN</span> Stack Developer
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">That's great to hear! With your extensive experience in web design and development, you likely have a wealth of knowledge and skills in creating effective and user-friendly websites. 
                            <br className="hidden md:inline lg:hidden"/>
                            Is there something specific you'd like to discuss or any questions you have related to web design and development? Whether it's about current trends, best practices, specific technologies, or anything else, feel free to let me know!.......
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/aboutMeDetails" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">About Me Details</NavLink>
                            
                        </div>
                    </div>
                </div>
        </section>
      
        
       </>
    );
};

export default Banner;