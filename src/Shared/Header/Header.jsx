import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// import logo from "../../assets/"


const Header = () => {


	const [isOpen, setIsOpen] = useState(false);

	window.addEventListener('scroll',function(){
		this.document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
	});

	const menu=document.querySelector('.nav_menu');
	const menuBtn=document.querySelector('#open-menu-btn');
	const closeBtn=document.querySelector('#close-menu-btn');
	
	const handleMenuOpen = () =>{
		setIsOpen(true)
		console.log('clicked the button');
	}
	const handleMenuClose = () =>{
		setIsOpen(false)
	}
	

    return (
        <>
			<nav>
				<div className="container mx-auto nav_container">
					<NavLink to="/"><h1 className='text-4xl text-white'>Leroy Jenkins</h1></NavLink>
					<ul className={`nav_menu ${isOpen ? 'open' : ''}`}>
						<li><NavLink to="/" className='text-white text-4xl'>Home</NavLink></li>
						<li><NavLink to="/service" className='text-white text-4xl'>Service</NavLink></li>
						<li><NavLink to="/project" className='text-white text-4xl'>Project</NavLink></li>
						<li><NavLink to="/contact" className='text-white text-4xl'>Contact</NavLink></li>
					</ul>
					{/* <li><i class="bi bi-brightness-high-fill sun" id="toggleDark"></i></li> */}
					<button id="open-menu-btn" onClick={handleMenuOpen}><FaBars /></button>
					<button id="close-menu-btn" onClick={handleMenuClose}><AiOutlineClose /></button>
				</div>
			</nav>

		{/* <div className=" navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
				<li><a>Link</a></li>
				<li>
					<details>
					<summary>
						Parent
					</summary>
					<ul className="p-2 bg-base-100">
						<li><a>Link 1</a></li>
						<li><a>Link 2</a></li>
					</ul>
					</details>
				</li>
				</ul>
			</div>
		</div> */}
        </>
    );
};

export default Header;