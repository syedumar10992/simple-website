import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import Contact from '../../assets/contact.png';
import mobileMenu from '../../assets/mobMenu.png';
import crossMenu from '../../assets/crossMenu.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="containerr navbar bg-body-gray">
            <nav className="md:pr-0 pr-2 pt-4 navbar flex   items-center justify-between sticky top-0">
                <img src={logo} alt='Logo' className='logo h-20 w-20' />
                <div className='desktopMenu'>
                    <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" >Home</Link>
                    <Link activeClass='active' to='do' spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" >About</Link>
                    <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" >Portfolio</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" >Clients</Link>
                </div>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} 
                className='desktopMenuBtn flex items-center justify-center bg-white text-black border-none py-2 px-4  rounded-2xl cursor-pointer'>
                    <img src={Contact} alt='' className='contactImg md:h-8	md:w-8 h-6 w-6	object-cover mr-4' /> Contact Me
                </Link>
                <img 
                    src={mobileMenu} 
                    alt='Menu' 
                    className={`mobMenu ${showMenu ? 'hidden' : 'block'} md:hidden`} 
                    onClick={() => setShowMenu(true)} 
                />
                <img 
                    src={crossMenu} 
                    alt='Close' 
                    className={`mobMenu ${showMenu ? 'block' : 'hidden'} md:hidden`} 
                    onClick={() => setShowMenu(false)} 
                />
                <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                    <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="mbl hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" onClick={()=>setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to='do' spy={true} smooth={true} offset={-100} duration={500} className="mbl hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" onClick={()=>setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="mbl hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="mbl hover:text-yellow-300 transition-all hover:pb-2 hover:border-b-4 border-yellow-500 menus mr-12 cursor-pointer" onClick={()=>setShowMenu(false)}>Clients</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar