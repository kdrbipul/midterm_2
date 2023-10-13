import React from 'react';
import { NavLink } from 'react-router-dom';
import canoeing from '../../../../assets/images/canoeing.jpg'
import UseTitle from '../../../DynamicTitle/UseTitle';

const Canoeing = () => {
    // Dynamic Title
    UseTitle('canoeing');
    return (
       <>

            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Canoeing </span> Adventure: Paddle Through Nature's Waterways 
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a serene journey through natural waterways with our guided canoeing adventures. Whether you're an experienced paddler or new to the sport, our tours offer a tranquil and immersive experience in some of the most picturesque settings.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Expert Guides: </span> Our certified guides are knowledgeable about the local waterways, wildlife, and natural features, ensuring a safe and informative journey.</li>
                                <li><span className="text-violet-400">Scenic Routes: </span> Explore a diverse range of water environments, from calm lakes to gently flowing rivers, providing a rich tapestry of natural beauty.</li>
                                <li><span className="text-violet-400">Suitable for All Levels: </span> Our canoeing adventures are designed to accommodate participants of various skill levels, from beginners to advanced paddlers.</li>
                                <li><span className="text-violet-400">Single and Tandem Canoes: </span> Choose between single or tandem canoes, allowing individuals, couples, and families to enjoy the experience together.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Swimming Ability:</span> Participants should have basic swimming skills, as well as be comfortable in the water.</li>
                                <li><span className="text-violet-400">Age Restrictions:  </span> Children must meet a minimum age requirement and be accompanied by a responsible adult.</li>
                                <li><span className="text-violet-400">What to Bring: </span> Wear comfortable clothing suitable for water activities. Sunscreen, a hat, and sunglasses are recommended for sun protection.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={canoeing} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
       </>
    );
};

export default Canoeing;