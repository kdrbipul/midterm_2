import React from 'react';
import cycling from "../../../../assets/images/cycling.jpg"
import { NavLink } from 'react-router-dom';

const Cycling = () => {
    return (
        <>

            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">Experience the Thrill of  
                            <span className="text-violet-400"> Cycling</span> in Dhar
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
                                <li><span className="text-violet-400">Scenic Routes:</span> Explore a diverse range of terrains, from rolling hills to lush valleys, as you pedal through some of Dhar's most stunning locales.</li>
                                <li><span className="text-violet-400">Cultural Immersion:</span> Discover the vibrant traditions and local way of life as you pass through charming villages and interact with friendly residents.</li>
                                <li><span className="text-violet-400">Expert Guides:</span> Our experienced guides are well-versed in the region's geography and history, ensuring a safe and informative journey.</li>
                                <li><span className="text-violet-400">Customized Itineraries:</span> Tailor your adventure to suit your preferences. Choose from a variety of routes and durations, allowing you to experience Dhar at your own pace.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> Moderate fitness is recommended. While the routes are designed for various skill levels, a basic level of fitness will enhance your experience.</li>
                                <li><span className="text-violet-400">Age Restrictions:</span> Participants should be at least [insert minimum age requirement].</li>
                                <li><span className="text-violet-400">What to Bring:</span> Comfortable clothing suitable for cycling, closed-toe shoes, sunscreen, and a sense of adventure.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={cycling} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

        </>
    );
};

export default Cycling;