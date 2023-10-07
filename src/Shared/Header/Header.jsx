import React, { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// import logo from "../../assets/"
import { AuthContext } from './../../UserContext/ContextApi';


const Header = () => {

	const {user,logOut} = useContext(AuthContext);
	const navRef = useRef()

	window.addEventListener('scroll',function(){
		this.document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
	});

	// Show Navbar
	const showNavbar = () =>{
		console.log("clicked the button");
		navRef.current.classList.toggle('nav_menu')
	}


	// Log Out Process
	const handleLogOut = () =>{
		logOut()
		.then(()=>{
			alert("Successfully Log Out")
		})
		.catch(error=>{
			error;
		})
	}
	

    return (
        <>
			<nav>
				<div className="container mx-auto nav_container">
					<NavLink to="/"><h1 className='text-xl sm:text-4xl md:text-2xl text-white'>Leroy Jenkins</h1></NavLink>
					<ul ref={navRef} className='nav_menu'>
						<li><NavLink to="/" className='text-white text-xl sm:text-4xl'>Home</NavLink></li>
						<li><NavLink to="/service" className='text-white text-xl sm:text-4xl'>Service</NavLink></li>
						<li><NavLink to="/project" className='text-white text-xl sm:text-4xl'>Project</NavLink></li>
						<li><NavLink to="/contact" className='text-white text-xl sm:text-4xl'>Contact</NavLink></li>
						{
							user?.uid ? <li><NavLink to="/signin" className='text-white text-xl sm:text-4xl'><button className='btn btn-sm' onClick={handleLogOut}>Log Out</button></NavLink></li> : ''
						}
						<div className="w-10 rounded-full">
							<img src={user?.photoURL} />
						</div>
					</ul>
					<button id="open-menu-btn" onClick={showNavbar}><FaBars /></button>
					<button id="close-menu-btn" onClick={showNavbar}><AiOutlineClose /></button>
				</div>
			</nav>
        </>
    );
};

export default Header;