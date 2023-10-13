import React from 'react';
import { NavLink } from 'react-router-dom';
import geocaching from '../../../../assets/images/Geocaching.jpg'
import UseTitle from '../../../DynamicTitle/UseTitle';

const Geocaching = () => {
    // Dynamic Title
    UseTitle('geocaching');
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">Experience the Thrill of  
                            <span className="text-violet-400"> Geocaching</span> in Dhar
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an unforgettable cycling adventure in the heart of Dhar. Nestled amidst picturesque landscapes and rich cultural heritage, Dhar offers a unique backdrop for an exhilarating biking experience. Our guided cycling tours cater to riders of all levels, from beginners to seasoned enthusiasts.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Expert Guidance:</span> Our experienced geocaching guides are skilled in navigation, GPS usage, and familiar with the best geocaching spots in the area.</li>
                                <li><span className="text-violet-400">Diverse Locations: </span>  Explore a range of environments, from urban settings to remote natural areas, uncovering hidden treasures along the way.</li>
                                <li><span className="text-violet-400">Treasures to Discover: </span> Each geocache holds a unique collection of trinkets and a logbook for you to sign, leaving your mark on the journey.</li>
                                <li><span className="text-violet-400">Educational Experience: </span> Learn about the history, culture, and natural features of the area as you follow the trail of hidden caches.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Familiarity with GPS Devices: </span> While not required, some basic knowledge of GPS devices or smartphone navigation apps can be helpful for successful geocaching.</li>
                                <li><span className="text-violet-400">Physical Fitness Level: </span> Geocaching can be tailored to different fitness levels, with caches accessible by foot, bicycle, or even by car in some cases.</li>
                                <li><span className="text-violet-400">Age Range: </span> Geocaching can be enjoyed by participants of all ages. Children should be accompanied by a responsible adult.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={geocaching} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Geocaching;