import React from 'react';

const Paragliding = () => {
    return (
        <>
            <section data-aos="zoom-in" data-aos-duration="3000" className="container mx-auto my-16 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-4xl">The  
                            <span className="text-violet-400"> Paragliding </span> Adventure: Soar Through the Skies 
                        </h1>
                        <h1 className="text-5xl my-4 font-bold leadi sm:text-4xl">  
                            <span className="text-violet-400"> Overview:</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Experience the exhilaration of paragliding, a gravity-defying adventure that allows you to soar through the skies like a bird. Whether you're a seasoned paraglider or a first-time flyer, our guided paragliding tours promise an unforgettable experience in some of the most breathtaking locations.
                            <br className="hidden md:inline lg:hidden" />
                        </p>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Highlights:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Certified Instructors:</span> Our experienced instructors are well-versed in sandboarding techniques and safety procedures, ensuring a fun and secure ride for participants of all levels.</li>
                                <li><span className="text-violet-400">Spectacular Dune Scenery:</span> Explore vast sand dunes that stretch as far as the eye can see, providing a breathtaking backdrop for your sandboarding adventure.</li>
                                <li><span className="text-violet-400">Equipment Provided:</span> We supply all necessary sandboarding equipment, including specially designed sandboards and safety gear, ensuring a comfortable and safe ride.</li>
                                <li><span className="text-violet-400">Guided Descents:  </span> Our guides will lead you to the best dunes and provide instruction on sandboarding techniques, allowing you to make the most of your experience.</li>
                            </ul>
                        </div>
                        <h1 className="text-5xl font-bold my-4 leadi sm:text-4xl">  
                            <span className="text-violet-400">Requirements:</span>
                        </h1>
                        <div>
                            <ul>
                                <li><span className="text-violet-400">Fitness Level:</span> Sandboarding requires a moderate level of physical fitness. Participants should be able to walk on sand dunes and comfortably carry their equipment.</li>
                                <li><span className="text-violet-400">Age Restrictions: </span> Participants should be at least [<span className="text-violet-400">18+</span> minimum age requirement].</li>
                                <li><span className="text-violet-400">What to Bring:  </span> Wear comfortable clothing suitable for outdoor activities. Sunscreen, sunglasses, and a hat are recommended to protect against the desert sun.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col my-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <NavLink rel="noopener noreferrer" to="/service" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Go to Service page</NavLink>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={sandboarding} alt="" className="object-contain flex items center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Paragliding;