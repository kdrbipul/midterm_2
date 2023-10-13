import React from 'react';
import { NavLink } from 'react-router-dom';
import canyoneering from '../../../../assets/images/canyoneering.jpg'
import UseTitle from '../../../DynamicTitle/UseTitle';

const Canyoneering = () => {
    // Dynamic Title
    UseTitle('canyoneering');
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Canyoneering</span> Adventure: Explore Nature's Hidden Wonders 
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an exhilarating canyoneering adventure that takes you through the heart of nature's hidden wonders. Our guided tours are designed to provide a thrilling and immersive experience for adventurers seeking to navigate through rugged and breathtaking canyons.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Expert Guides: </span> Our certified canyoneering guides are skilled in technical descents, navigation, and safety procedures, ensuring a safe and exciting journey.</li>
                                <li><span className="text-violet-400">Spectacular Canyons:  </span> ENavigate through stunning canyons, characterized by towering walls, cascading waterfalls, and unique geological formations.</li>
                                <li><span className="text-violet-400">Technical Descents:  </span>  Experience the thrill of rappelling down waterfalls, sliding down natural chutes, and navigating through pools of crystal-clear water.</li>
                                <li><span className="text-violet-400">Safety Gear Provided: </span> We supply all necessary canyoneering equipment, including harnesses, helmets, ropes, and wetsuits, ensuring a secure and comfortable experience.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> Participants should have a moderate level of physical fitness and be comfortable with activities that may involve swimming and hiking.</li>
                                <li><span className="text-violet-400">Swimming Ability:</span> Participants should have basic swimming skills, as well as be comfortable in the water.</li>
                                <li><span className="text-violet-400">Age Restrictions:  </span> Children must meet a minimum age requirement and be accompanied by a responsible adult.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={canyoneering} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>        
        </>
    );
};

export default Canyoneering;