import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { createPortal } from 'react-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu.jsx';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <header className='flex justify-between items-center p-4 mb-8'>
            <NavLink to="/" className='text-2xl text-text1 font-black'>Escuela de P.I.T</NavLink>
            <nav className='hidden lg:block'>
                <ul className='flex items-center gap-6'>
                    <li className='text-text1/50 font-bold'><NavLink to="/sobre-nosotros">Sobre nosotros</NavLink></li>
                    <li className='text-text1/50 font-bold'><NavLink to="/cursos">Cursos</NavLink></li>
                    <li className='text-text1/50 font-bold'><NavLink to="/">Articulos</NavLink></li>
                    <li className='text-text1/50 font-bold'><NavLink to="/profesionales">Listado de profesionales</NavLink></li>
                    <li className='text-text1/50 font-bold'><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </nav>
            <FontAwesomeIcon className='lg:hidden' icon={faBars} size='xl' onClick={() => {setIsOpen(!isOpen)}}/>
            {isOpen && (createPortal(<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />, document.getElementById("mobile-menu-portal")))}
        </header>
        
    )
};

export default Header;