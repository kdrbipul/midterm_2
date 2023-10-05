import React from 'react';
import { NavLink } from 'react-router-dom';
import hiking from '../../../../assets/images/hiking2.jpg'

const Hiking = () => {
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Hiking  </span> Adventure: Explore Nature's Pathways 
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on an invigorating journey through nature's pathways with our guided hiking adventures. Whether you're an experienced hiker or a beginner, our tours offer a chance to connect with the natural world and discover the beauty of the great outdoors.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Expert Guides: </span> Our certified hiking guides are well-versed in local flora, fauna, and trail conditions, ensuring a safe and informative journey.</li>
                                <li><span className="text-violet-400">Diverse Terrain: </span> SExplore a range of landscapes, from lush forests and rolling meadows to rugged mountain trails and serene lakeshores.</li>
                                <li><span className="text-violet-400">Scenic Views:   </span>  Immerse yourself in breathtaking vistas, providing a sense of accomplishment and a unique perspective on the surrounding landscape.</li>
                                <li><span className="text-violet-400">Educational Experience:   </span>  Learn about the ecology, geology, and history of the area, gaining a deeper appreciation for the natural world.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> Participants should have a moderate level of physical fitness, and the specific fitness requirements may vary depending on the chosen trail.</li>
                                <li><span className="text-violet-400">Age Restrictions: </span>  Some hikes may have age restrictions for safety reasons. Please check the details for each adventure.</li>
                                <li><span className="text-violet-400">What to Bring:  </span> Wear comfortable, moisture-wicking clothing suitable for hiking. Bring water, snacks, sunscreen, a hat, and sturdy closed-toe footwear.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={hiking} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hiking;