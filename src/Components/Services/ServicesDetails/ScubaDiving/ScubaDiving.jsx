import React from 'react';
import { NavLink } from 'react-router-dom';
import scubadiving from "../../../../assets/images/scuba diving.jpg"

const ScubaDiving = () => {
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Scuba</span> Diving Adventure: Explore the Underwater World
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dive into an extraordinary world beneath the waves with our scuba diving adventures. Whether you're a seasoned diver or a first-timer, our guided tours offer a unique opportunity to discover the vibrant marine life, stunning coral reefs, and underwater landscapes of our carefully selected dive locations.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Certified Dive Instructors:</span> Our experienced and certified dive instructors are dedicated to ensuring a safe and enjoyable diving experience for participants of all levels.</li>
                                <li><span className="text-violet-400">Pristine Dive Sites:</span> We carefully choose dive locations known for their rich biodiversity, crystal-clear waters, and unique underwater features.</li>
                                <li><span className="text-violet-400">Diverse Marine Life:</span> Encounter a wide array of marine species, from colorful fish and graceful sea turtles to mesmerizing coral formations.</li>
                                <li><span className="text-violet-400">Safety First: </span> Safety is our top priority. All dives include thorough safety briefings, equipment checks, and our guides are certified in first aid and CPR.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Certification Level:</span> Depending on the specific dive site and excursion, certain dives may have minimum certification level requirements. Please check the details for each adventure.</li>
                                <li><span className="text-violet-400">Medical Considerations:</span> Participants may be required to complete a medical questionnaire to ensure they meet the necessary health and fitness standards for scuba diving.</li>
                                <li><span className="text-violet-400">Experience Level: </span> Some dives may be suitable for beginners, while others may require more advanced skills. Please review the specific requirements for each dive.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={scubadiving} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScubaDiving;