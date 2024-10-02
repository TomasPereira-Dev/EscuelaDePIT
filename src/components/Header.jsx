import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"
const Header = () => {
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
            <FontAwesomeIcon className='lg:hidden' icon={faBars} size='xl'/>
        </header>
    )
};

export default Header;