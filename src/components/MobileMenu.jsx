import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const MobileMenu = ({isOpen ,setIsOpen}) => {
    return(
        <div className="fixed top-0 z-40 h-dvh w-full bg-text1/50">
            <div className="fixed top-0 right-0 left-1/3 bottom-0 z-50 flex flex-col items-end gap-4 p-4 bg-lightBlue1">
                <FontAwesomeIcon className="text-text2" icon={faXmark} size={"2xl"} onClick={() => {setIsOpen(!isOpen)}}/>
                <nav>
                    <ul className='flex flex-col gap-4 p-6 text-center bg-white rounded-md'>
                        <li className='text-text1/75 font-bold'><NavLink to="/sobre-nosotros">Sobre nosotros</NavLink></li>
                        <li className='text-text1/75 font-bold'><NavLink to="/cursos">Cursos</NavLink></li>
                        <li className='text-text1/75 font-bold'><NavLink to="https://escuela-de-pit-blog.vercel.app/">Articulos</NavLink></li>
                        <li className='text-text1/75 font-bold'><NavLink to="/profesionales">Listado de profesionales</NavLink></li>
                        <li className='text-text1/75 font-bold'><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>

    )

}

export default MobileMenu;