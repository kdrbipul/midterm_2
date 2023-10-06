import React from 'react';
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'
import team3 from '../../assets/images/team3.jpg'
import team4 from '../../assets/images/team4.jpg'
import team5 from '../../assets/images/team5.jpg'
import team6 from '../../assets/images/team6.jpg'

const Team = () => {
    return (
        <section data-aos="flip-up" data-aos-duration="3000" className="py-6 container mx-auto bg-transparent text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our team</h1>
            <p className="max-w-2xl text-center text-white">We have our own team, here we work with our team and try to please our client as fast as possible.</p>
            <div className="flex flex-row flex-wrap-reverse justify-center">
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team1} />
                    <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                    <p className="text-white">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team2} />
                    <p className="text-xl font-semibold leadi">Jammey Oliver</p>
                    <p className="text-white">Graphic Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team3} />
                    <p className="text-xl font-semibold leadi">Lisa Loren</p>
                    <p className="text-white">Photo Editor</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team4} />
                    <p className="text-xl font-semibold leadi">Jean Baptiste</p>
                    <p className="text-white">Photographer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team5} />
                    <p className="text-xl font-semibold leadi">Elizabeth</p>
                    <p className="text-white">Software Engineer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team6} />
                    <p className="text-xl font-semibold leadi">Rahul Dravid</p>
                    <p className="text-white">Full Stack Developer</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Team;