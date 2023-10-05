import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// import logo from "../../assets/"


const Header = () => {

	window.addEventListener('scroll',function(){
		this.document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
	});

	const menu=document.querySelector('.nav_menu');
	const menuBtn=document.querySelector('#open-menu-btn');
	const closeBtn=document.querySelector('#close-menu-btn');
	// menuBtn.addEventListener('click',()=>{
	// 	menu.style.display="flex";
	// 	closeBtn.style.display="inline-block";
	// 	menuBtn.style.display="none";
	// });
	// const closeNav=()=>{
	// 	menu.style.display="none";
	// 	closeBtn.style.display="none";
	// 	menuBtn.style.display="inline-block";
	// }

    return (
        <>
			<nav>
				<div className="container mx-auto nav_container">
					<NavLink to="/"><h1 className='text-4xl text-white'>Kader</h1></NavLink>
					<ul class="nav_menu">
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/service">Service</NavLink></li>
						<li><NavLink to="/project">Project</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
					{/* <li><i class="bi bi-brightness-high-fill sun" id="toggleDark"></i></li> */}
					<button id="open-menu-btn"><FaBars /></button>
					<button id="close-menu-btn"><AiOutlineClose /></button>
				</div>
			</nav>
        </>
    );
};

export default Header;