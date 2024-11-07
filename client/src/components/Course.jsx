import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Course = ({data}) => {
    return(
        <li className="flex flex-col items-center gap-4 md:flex-row lg:gap-8">
            <picture>
                <source srcSet={data.img.desktop} media="(min-width: 768px)"/>
                <img src={data.img.mobile} alt={data.img.alt} />
            </picture>
            <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="flex items-center gap-2">
                    {data.modalidad === "presencial" ? <FontAwesomeIcon className="text-text1" icon={faPeopleGroup} size="xl" /> : <FontAwesomeIcon className="text-text1" icon={faLaptop} size="xl" />}
                    <p className="text-text1 text-lg font-semibold tracking-wide">{data.modalidad.toUpperCase()}</p>
                </div>
                <h2 className="text-3xl text-text1 text-center md:text-left">{data.titulo.toUpperCase()}</h2>
                <h3 className="text-lg text-text1 text-center md:text-left">{data.subtitulo}</h3>
                <ul>
                    <li className="text-text1 text-center md:text-left">{data.duracion}</li>
                    <li className="text-text1 text-center md:text-left">{data.otros.clases}</li>
                    <li className="text-text1 text-center md:text-left">{data.modalidad === "presencial" && "Cupos limitados"}</li>
                </ul>
                <NavLink to={`/cursos/${data.slug}`} className="text-text2 font-semibold px-8 py-2 bg-lightBlue1 rounded-md transition-colors hover:bg-text1">Ver Curso</NavLink>
            </div>
        </li>
    )
}

export default Course;


