import React from 'react';
import cycling from '../../assets/images/cycling.jpg'
import exploring from '../../assets/images/exploring.jpg'
import scubaDriving from '../../assets/images/scuba diving.jpg'
import sandboarding from '../../assets/images/sandboarding.jpg'
import paraglading from '../../assets/images/paragliding.jpg'
import canoeing from '../../assets/images/canoeing.jpg'
import canyoneering from '../../assets/images/canyoneering.jpg'
import cavingAndRockClimbing from '../../assets/images/caving and rock climbing.jpg'
import zipLining from '../../assets/images/zip-lining.jpg'
import hiking from '../../assets/images/hiking.jpg'
import { NavLink } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <section data-aos="flip-left" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={cycling} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">Experience the Thrill of  
                            <span className="text-violet-400"> Cycling</span> in Dhar
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an unforgettable cycling adventure in the heart of Dhar. Nestled amidst picturesque landscapes and rich cultural heritage,  
                            <br className="hidden md:inline lg:hidden"/>
                            Dhar offers a unique backdrop for an exhilarating biking experience......
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/cycling" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">More Details</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="flip-right" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The 
                            <span className="text-violet-400"> Exploring</span> Adventure: Uncover Hidden Wonders
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a thrilling journey of exploration with our curated adventures designed to take you off the beaten path.  
                            <br className="hidden md:inline lg:hidden"/>
                            Whether you're a seasoned traveler or a first-time adventurer, our........
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/exploring" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Show More</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={exploring} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section data-aos="flip-up" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={scubaDriving} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The  
                            <span className="text-violet-400"> Scuba Diving </span> Adventure: Explore the Underwater World
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dive into an extraordinary world beneath the waves with our scuba diving adventures.    
                            <br className="hidden md:inline lg:hidden"/>
                            Whether you're a seasoned diver or a first-timer,......
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/scubadiving" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">More Details</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="flip-down" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The 
                            <span className="text-violet-400"> Sandboarding </span> Adventure: Glide Across the Dunes
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Experience the thrill of sandboarding, a unique adventure that combines the rush of snowboarding with the stunning    
                            <br className="hidden md:inline lg:hidden"/>
                            backdrop of towering sand dunes. Whether you're a........
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Show More</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={sandboarding} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section data-aos="zoom-in" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={paraglading} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The  
                            <span className="text-violet-400"> Paragliding  </span> Adventure: Soar Through the Skies World
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Experience the exhilaration of paragliding, a gravity-defying adventure that allows you to soar      
                            <br className="hidden md:inline lg:hidden"/>
                            through the skies like a bird. Whether you're a seasoned paraglider or a first-time flyer,......
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">More Details</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="zoom-in-left" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The 
                            <span className="text-violet-400"> Canoeing  </span> Adventure: Paddle Through Nature's Waterways
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a serene journey through natural waterways with our guided canoeing adventures.     
                            <br className="hidden md:inline lg:hidden"/>
                            Whether you're an experienced paddler or new to the sport........
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Show More</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={canoeing} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section data-aos="zoom-in-right" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={canyoneering} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The  
                            <span className="text-violet-400"> Canyoneering </span> Adventure: Explore Nature's Hidden Wonders
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an exhilarating canyoneering adventure that takes you through the heart of nature's hidden wonders.        
                            <br className="hidden md:inline lg:hidden"/>
                            Our guided tours are designed to provide a thrilling and immersive,......
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">More Details</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="zoom-out-right" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The 
                            <span className="text-violet-400"> Caving </span> Adventure: Discover the Depths
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an extraordinary journey underground with our guided caving adventures. Whether you're a seasoned      
                            <br className="hidden md:inline lg:hidden"/>
                            spelunker or a first-time explorer, our tours offer........
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Show More</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={cavingAndRockClimbing} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section data-aos="zoom-out-down" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={zipLining} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The  
                            <span className="text-violet-400"> Zip Lining </span> Adventure: Soar Through the Treetops
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a thrilling journey through the treetops with our guided zip lining adventures.          
                            <br className="hidden md:inline lg:hidden"/>
                            Whether you're an adrenaline junkie or trying it for the first time, our tours promise an......
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">More Details</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="zoom-out-left" data-aos-duration="3000" className="bg-gray-800 my-8 text-gray-100 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold sm:text-4xl">The 
                            <span className="text-violet-400"> Hiking </span> Adventure: Explore Nature's Pathways
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an invigorating journey through nature's pathways with our guided hiking adventures. W       
                            <br className="hidden md:inline lg:hidden"/>
                            hether you're an experienced hiker or a beginner,........
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Show More</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={hiking} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;