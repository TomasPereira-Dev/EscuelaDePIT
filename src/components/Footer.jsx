import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="relative left-1/2 -translate-x-1/2 w-screen mx-auto py-16 bg-text1 lg:flex-row">
            <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-screen-xl lg:flex-row lg:justify-between">
                <p className="text-2xl text-text2 font-extrabold lg:self-start">Escuela de P.I.T</p>
                <nav className="grid grid-flow-row gap-4 text-text2 text-center lg:grid-flow-col lg:grid-cols-3 lg:gap-8 lg:text-left">
                    <ul>
                        <li><NavLink to="/">Página Principal</NavLink></li>
                        <li><NavLink to="/cursos">Cursos</NavLink></li>
                        <li><NavLink to="https://escuela-de-pit-blog.vercel.app/">Artículos</NavLink></li>
                        <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="/profesionales">Listado de profesionales</NavLink></li>
                        <li><NavLink to="https://reddit.com">Comunidad</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                    <ul className="flex justify-center gap-2 text-text2">
                        <li><FontAwesomeIcon icon={faInstagram} size="xl"/></li>
                        <li><NavLink to="https://x.com"><FontAwesomeIcon icon={faTwitter} size="xl"/></NavLink></li>
                        <li><NavLink to="https://reddit.com"><FontAwesomeIcon icon={faReddit} size="xl"/></NavLink></li>
                        <li><NavLink to="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="xl"/></NavLink></li>
                    </ul>
                </nav>
            </div>

        </footer>
    )
};

export default Footer;