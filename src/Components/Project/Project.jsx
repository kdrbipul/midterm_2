import React from 'react';
import './Project.css'
import { BiHappyHeartEyes } from 'react-icons/bi';
import { RiProjectorLine } from 'react-icons/ri';
import { FcRating } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import web1 from '../../assets/images/website1.jpg'
import web2 from '../../assets/images/website2.jpg'
import web3 from '../../assets/images/website4.jpg'
import web4 from '../../assets/images/website5.jpg'
import web5 from '../../assets/images/website6.jpg'
import web6 from '../../assets/images/website7.jpg'
import web7 from '../../assets/images/website8.jpg'
import web8 from '../../assets/images/website9.jpg'
import web9 from '../../assets/images/website10.jpg'



const Project = () => {
	
    return (
        <>
			<section className="products container mx-auto my-32">
				<article data-aos="zoom-in" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web1} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Adventure Blog</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="zoom-out" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web2} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">E-comerce website</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="fade-right" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web3} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Tourism</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="flip-right" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web4} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Open AI</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="flip-up" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web5} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Chat GPT</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web6} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Humanity</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="fade-up" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web7} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Hospital</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="flip-right" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web8} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Security</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
				<article data-aos="zoom-in" data-aos-duration="3000" className="product aboutMeDetails bg-green-500 text-white">
						<img className="product_image" src={web9} alt="product1"/>
						<div className="product_body">
							<h3 className="product_name text-center text-2xl">Cyber Security</h3>
							<p>
								<span className="dot green"></span>
								<span className="dot red"></span>
								<span className="dot black"></span>                        
							</p>
							<p className="product_description">
								Get over 500 name ideas for your travel blog, or search our dashboard of 
							</p>
						</div>
						<div className='flex items-center justify-around my-3 text-yellow-400'>
							<span className='text-4xl'><BiHappyHeartEyes /></span>
							<span className='text-4xl'><RiProjectorLine /></span>
							<span className='text-4xl'><FcRating /></span>
						</div>
						<NavLink to='/aboutMeDetails'><button className="w-full px-8 py-3 my-4 text-lg font-semibold rounded bg-red-400 hover:bg-red-500 transition-all text-white">Hire Me</button></NavLink>
				</article>
			</section>       
        </>
    );
};

export default Project;