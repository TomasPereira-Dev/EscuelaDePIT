import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Courses = () => {
    return(
        <main className="flex flex-col items-center gap-4 px-4">
            <section className="relative left-1/2 -translate-x-1/2 w-screen px-4 py-8 mx-auto bg-lightBlue1 lg:py-12">
                <h1 className="text-3xl text-text2 font-bold lg:text-4xl lg:text-center">Cursos y capacitaciones</h1>
            </section>
            <section className="my-8">
                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-8">
                    <picture>
                        <source srcSet="./course-img-desktop.png" media="(min-width: 768px)"/>
                        <img src="./course-img.png" alt="un joven estudiante sentado, hablando con un compañero" />
                    </picture>
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon className="text-text1" icon={faPeopleGroup} size="xl" />
                            <p className="text-text1 text-lg font-semibold tracking-wide">PRESENCIAL</p>
                        </div>
                        <h2 className="text-3xl text-text1 text-center md:text-left">CURSO INTENSIVO DE P.I.T</h2>
                        <h3 className="text-lg text-text1 text-center md:text-left">Capacitate con nosotros en esta revolucionaria terapia</h3>
                        <div>
                            <p className="text-text1 text-center md:text-left">Duracion 12 semanas</p>
                            <p className="text-text1 text-center md:text-left">4 clases semanales de 4 horas</p>
                            <p className="text-text1 text-center md:text-left">Cupos limitados</p>
                        </div>
                        <NavLink to="/cursos/curso" className="text-text2 font-semibold px-8 py-2 bg-lightBlue1 rounded-md transition-colors hover:bg-text1">Ver Curso</NavLink>
                    </div>
                </div>
            </section>
        </main> 
    )
} 

export default Courses;