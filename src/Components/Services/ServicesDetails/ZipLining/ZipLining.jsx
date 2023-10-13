import React from 'react';
import { NavLink } from 'react-router-dom';
import ziplining from '../../../../assets/images/zip-lining.jpg'
import UseTitle from '../../../DynamicTitle/UseTitle';

const ZipLining = () => {
    // Dynamic Title
    UseTitle('ziplining');
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Zip Lining </span> Adventure: Soar Through the Treetops 
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a thrilling journey through the treetops with our guided zip lining adventures. Whether you're an adrenaline junkie or trying it for the first time, our tours promise an exhilarating experience in some of the most breathtaking natural settings.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Certified Guides: </span> Our experienced zip lining guides are trained in safety procedures and techniques, ensuring a secure and exciting ride for participants of all levels.</li>
                                <li><span className="text-violet-400">Spectacular Canopy Views: </span> Soar high above the forest canopy, taking in panoramic views of lush greenery, unique terrain, and, in some cases, even glimpses of wildlife.</li>
                                <li><span className="text-violet-400">Variety of Lines:   </span>  Our courses feature a range of zip lines, including exhilarating long runs and shorter, faster lines, providing a diverse and dynamic experience.</li>
                                <li><span className="text-violet-400">Safety Gear Provided:  </span>  We supply all necessary zip lining equipment, including harnesses, helmets, gloves, and pulleys, ensuring a secure and comfortable ride.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> Participants should have a moderate level of physical fitness and be comfortable with heights. Some zip lining adventures may have specific fitness requirements, so please check the details for each adventure.</li>
                                <li><span className="text-violet-400">Age and Weight Restrictions: </span> Participants must meet specific age and weight requirements for safety reasons. Please check the details for each adventure.</li>
                                <li><span className="text-violet-400">What to Bring:  </span> Wear comfortable clothing suitable for outdoor activities. Closed-toe shoes are recommended.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={ziplining} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ZipLining;