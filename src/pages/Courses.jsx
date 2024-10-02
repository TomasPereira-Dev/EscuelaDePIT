import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
    return(
        <main className="flex flex-col items-center gap-4 px-4">
            <section className="relative left-1/2 -translate-x-1/2 w-screen px-4 py-8 mx-auto bg-lightBlue1">
                <h1 className="text-3xl text-text2 font-bold">Cursos y capacitaciones</h1>
            </section>
            <section>
                <div className="flex flex-col items-center gap-4">
                    <picture>
                        <img src="./course-img.png" alt="un joven estudiante sentado, hablando con un compañero" />
                    </picture>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon className="text-text1" icon={faPeopleGroup} size="xl" />
                        <p className="text-text1 text-lg font-semibold tracking-wide">PRESENCIAL</p>
                    </div>
                    <h2 className="text-3xl text-text1 text-center">CURSO INTENSIVO DE P.I.T</h2>
                    <h3 className="text-lg text-text1 text-center">Capacitate con nosotros en esta revolucionaria terapia</h3>
                    <div>
                        <p className="text-text1 text-center">Duracion: 12 semanas</p>
                        <p className="text-text1 text-center">4 clases semanales de 4 horas</p>
                        <p className="text-text1 text-center">Cupos limitados</p>
                    </div>
                    <a href="/" className="text-text2 font-semibold px-8 py-2 bg-lightBlue1 rounded-md">Ver Curso</a>
                </div>
            </section>
        </main> 
    )
} 

export default Courses;