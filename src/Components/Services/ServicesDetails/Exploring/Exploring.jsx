import React from 'react';
import { NavLink } from 'react-router-dom';
import exploring from "../../../../assets/images/exploring.jpg"

const Exploring = () => {
    return (
        <>

            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Exploring</span> Adventure: Uncover Hidden Wonders
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a thrilling journey of exploration with our curated adventures designed to take you off the beaten path. Whether you're a seasoned traveler or a first-time adventurer, our guided tours promise to reveal the secrets of some of the world's most captivating destinations.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Expert Guides:</span> Our experienced guides are local experts, well-versed in the history, culture, and natural wonders of the areas you'll explore.</li>
                                <li><span className="text-violet-400">Diverse Destinations:</span> From ancient ruins to hidden caves and untouched wilderness, our explorations span a wide range of landscapes and environments.</li>
                                <li><span className="text-violet-400">Customizable Itineraries:</span> Tailor your adventure to your preferences. Choose from a selection of routes and durations, allowing you to immerse yourself in the places that intrigue you most.</li>
                                <li><span className="text-violet-400">Cultural Immersion:</span> Engage with local communities, learn about their traditions, and gain a deeper understanding of the regions you visit.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> The level of physical fitness required can vary depending on the specific exploration. Some adventures may be more demanding than others, so it's important to review the details for each excursion.</li>
                                <li><span className="text-violet-400">Age Restrictions:</span> Some explorations may have age restrictions for safety reasons. Please check the specific requirements for each adventure.</li>
                                <li><span className="text-violet-400">What to Bring:</span> Depending on the nature of the exploration, participants may be advised to bring appropriate clothing, footwear, and personal items.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={exploring} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

        </>
        
    );
};

export default Exploring;