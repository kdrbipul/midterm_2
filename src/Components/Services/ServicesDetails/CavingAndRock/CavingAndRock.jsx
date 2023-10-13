import React from 'react';
import { NavLink } from 'react-router-dom';
import cavingandrock from '../../../../assets/images/caving and rock climbing.jpg'
import UseTitle from '../../../DynamicTitle/UseTitle';

const CavingAndRock = () => {
    // Dynamic Title
    UseTitle('cavinandrock');
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Caving Adventure: </span> Discover the Depths 
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an extraordinary journey underground with our guided caving adventures. Whether you're a seasoned spelunker or a first-time explorer, our tours offer a chance to discover the hidden wonders of subterranean landscapes.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Expert Guides: </span> Our certified caving guides are knowledgeable about cave formations, safety procedures, and the unique ecology of underground environments.</li>
                                <li><span className="text-violet-400">Spectacular Cave Systems: </span> Explore intricate cave networks, adorned with stunning stalactites, stalagmites, and other geological wonders.</li>
                                <li><span className="text-violet-400">Climbing and Crawling:   </span>  Traverse through narrow passages, climb over rocky formations, and wade through subterranean streams for an immersive caving experience.</li>
                                <li><span className="text-violet-400">Safety Gear Provided:  </span> We supply all necessary caving equipment, including helmets, headlamps, harnesses, and safety ropes, ensuring a secure and comfortable exploration.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> Participants should have a moderate level of physical fitness. Caving may involve climbing, crawling, and navigating through uneven terrain.</li>
                                <li><span className="text-violet-400">Age Restrictions: </span> Participants must meet a minimum age requirement, and minors must be accompanied by a responsible adult.</li>
                                <li><span className="text-violet-400">What to Bring:  </span> Wear comfortable clothing suitable for caving. Sturdy, closed-toe footwear with good traction is recommended.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={cavingandrock} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CavingAndRock;