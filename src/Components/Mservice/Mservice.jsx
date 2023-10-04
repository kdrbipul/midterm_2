import React from 'react';
import cycling from '../../assets/images/cycling.jpg'
import paragliding from '../../assets/images/paragliding.jpg'
import Geocaching from '../../assets/images/Geocaching.jpg'
import sandboarding from '../../assets/images/sandboarding.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const Mservice = () => {
    return (
        <>
            <section className="py-6 container mx-auto bg-transparent text-gray-100">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div data-aos="fade-right" data-aos-duration="3000" className="space-y-4 flex flex-col	justify-center items-center  mx-auto">
                        <h3 className="text-2xl font-bold leadi sm:text-5xl">Our Services</h3>
                        <p className="max-w-2xl text-center text-white">We usually deal with different adventures like dhar cycling, caving and rock climbing, sandboarding, scuba diving, imaging, canyoneering, paragliding, geocaching.</p>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        <div data-aos="flip-up" data-aos-duration="3000" className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={cycling} />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">cycling</h4>
                                <NavLink to='/service'>
                                <button type="button" className="w-60 my-6 flex justify-center items-center px-8 py-3 font-semibold rounded-md bg-red-400 hover:bg-red-500 transition-all text-white">
                                    Any More? <span className='text-2xl flex justify-center items-center mx-2'><BsArrowRight /></span></button></NavLink>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={paragliding} />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">paragliding</h4>
                                <NavLink to='/service'>
                                <button type="button" className="w-60 my-6 flex justify-center items-center px-8 py-3 font-semibold rounded-md bg-red-400 hover:bg-red-500 transition-all text-white">
                                Any More? <span className='text-2xl flex justify-center items-center mx-2'><BsArrowRight /></span></button></NavLink>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="3000" className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={Geocaching} />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">Geocaching</h4>
                                <NavLink to='/service'>
                                <button type="button" className="w-60 my-6 flex justify-center items-center px-8 py-3 font-semibold rounded-md bg-red-400 hover:bg-red-500 transition-all text-white">
                                Any More? <span className='text-2xl flex justify-center items-center mx-2'><BsArrowRight /></span></button></NavLink>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={sandboarding} />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">sandboarding</h4>
                                <NavLink to='/service'>
                                <button type="button" className="w-60 my-6 flex justify-center items-center px-8 py-3 font-semibold rounded-md bg-red-400 hover:bg-red-500 transition-all text-white">
                                Any More? <span className='text-2xl flex justify-center items-center mx-2'><BsArrowRight /></span></button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
};

export default Mservice;