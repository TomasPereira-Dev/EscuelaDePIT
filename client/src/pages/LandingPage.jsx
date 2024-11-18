import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe, faCheck, faHandHoldingHeart, faSchool, faVolumeHigh, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const LandingPage = () => {

    return (
        <>
            <main className="flex flex-col gap-24 px-4 py-8 mb-24 lg:gap-48">
                <section className="flex flex-col items-center gap-4 lg:flex-row-reverse">
                    <picture>
                        <source srcSet="./hero-desktop.png" media="(min-width: 1024px)"/>
                        <img src="./hero.png" alt="una ilustración de una medica atendiendo a un paciente"/>
                    </picture>
                    <div className="flex flex-col items-center gap-4 lg:items-start">
                        <h1 className="text-3xl text-text1 text-center font-bold  lg:text-6xl lg:text-left lg:max-w-[16ch] lg:leading-snug">Terapia de inyección perineural</h1>
                        <p className="text-text1 text-center max-w-[34ch] lg:text-left lg:max-w-[42ch]">Creada por el  Dr. John Lyftogt, usa D5W (dextrosa al 5% en agua estéril) para tratar los nervios dolorosos e inhibir el dolor neuropático crónico.</p>
                        <NavLink className="text-text2 font-bold w-fit px-8 py-4 bg-lightBlue1 rounded-full transition-colors hover:bg-text1" to="/cursos">CAPACITATE</NavLink>
                    </div>
                </section>
                <section className="grid grid-flow-row gap-6 lg:grid-flow-col lg:place-content-between">
                    <div className="flex flex-col items-center gap-2 text-center lg:text-left lg:items-start">
                        <FontAwesomeIcon icon={faSyringe} className="text-text2 p-4 bg-lightBlue1 rounded-full w-[32px] h-[32px]" />
                        <h2 className="text-2xl text-text1">De vanguardia</h2>
                        <p className="text-text1 max-w-[28ch]">consiste en una serie de pequeñas inyecciones subcutáneas dirigidas a áreas dolorosas donde los nervios son sensibles, utilizando sustancias no farmacológicas.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center lg:text-left lg:items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-text2 p-4 bg-lightBlue1 rounded-full w-[32px] h-[32px]" />
                        <h2 className="text-2xl text-text1">Éxito asegurado</h2>
                        <p className="text-text1 max-w-[32ch]">Los tratamientos repetidos (6-8 sesiones), resultan en una reducción gradual del dolor, apuntando a una resolución completa. Las tasas de éxito varían entre el 80% y el 100%, dependiendo de la condición. </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center lg:text-left lg:items-start">
                        <FontAwesomeIcon icon={faHandHoldingHeart} className="text-text2 p-4 bg-lightBlue1 rounded-full w-[32px] h-[32px]" />
                        <h2 className="text-2xl text-text1">Seguro</h2>
                        <p className="text-text1 max-w-[32ch]">D5W se utiliza como solución intravenosa en hospitales de todo el mundo. Al ser principalmente un tratamiento subcutáneo y usando solo una aguja de media pulgada, el daño se minimiza.</p>
                    </div>
                </section>
                <section className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
                    <picture>
                        <img src="./doctor.webp" alt="una imagen de un doctor mirando con esperanza" />
                    </picture>
                    <div className="flex flex-col items-center gap-2 lg:items-start">
                        <h2 className="text-3xl text-text1 text-center font-bold lg:text-6xl lg:text-left ">No manejes el dolor, Tratalo.</h2>
                        <p className="text-text1 text-center max-w-[32ch] lg:text-left lg:max-w-[58ch]">Combatí el dolor cronico con un tratamiento novedoso, eficaz y seguro. Sin dependencia, sin efectos adversos, solo bienestar</p>
                        <div className="flex gap-2 lg:mt-2 lg:gap-4">
                            <NavLink to="/cursos" className="px-4 py-2 rounded-full text-xs text-text2 font-semibold bg-lightBlue1 transition-colors hover:bg-text1 lg:text-base lg:px-6 lg:py-3">Aprendé con nosotros</NavLink>
                            <NavLink to="/profesionales" className="px-4 py-2 rounded-full text-xs text-text2 font-semibold bg-lightBlue1 transition-colors hover:bg-text1 lg:text-base lg:px-6 lg:py-3">Tratá tu dolor ahora</NavLink>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center gap-2">
                    <h2 className="text-3xl text-text1 text-center ">Donde sea que estes, ahi estamos.</h2>
                    <p className="mb-4 text-center max-w-[30ch] lg:max-w-[56ch]">Ya sea como profesores, medicos o colegas, la Escuela de P.I.T siempre esta a tu lado para lo que nesesites</p>
                    <div className="grid grid-flow-row gap-4 w-full lg:grid-flow-col lg:gap-6">
                        <div className="relative p-4 bg-lightBlue1 rounded overflow-hidden">
                            <FontAwesomeIcon className="relative -top-6 -left-16 -rotate-12 text-text2" icon={faSchool} size="10x" />
                            <h3 className="text-4xl text-text2 text-center">Educación</h3>
                        </div>
                        <div className="relative p-4 bg-lightBlue1 rounded overflow-hidden">
                            <FontAwesomeIcon className="relative -top-6 -left-16 -rotate-12 text-text2" icon={faVolumeHigh} size="10x"/>
                            <h3 className="text-4xl text-text2 text-center">Divulgación</h3>
                        </div>
                        <div className="relative p-4 bg-lightBlue1 rounded overflow-hidden">
                            <FontAwesomeIcon className="relative -top-6 -left-16 -rotate-12 text-text2" icon={faReddit} size="10x"/>
                            <h3 className="text-4xl text-text2 text-center">Comunidad</h3>
                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col items-center gap-2 md:gap-4 md:flex-row lg:gap-8">
                    <picture>
                        <source srcSet="./testimonial-desktop.webp" media="(min-width: 768px)"/>
                        <img  src="./testimonial.webp" alt="El doctor Heno Pigerl posando junto al doctor Ricardo Frusso" />
                    </picture>
                    <FontAwesomeIcon className="absolute -top-10 left-0 text-text1/75" icon={faQuoteLeft} size="5x"/>
                    <div>
                        <p className="text-text1/75 text-center font-semibold max-w-[32ch] md:text-left md:max-w-[52ch] lg:text-lg">&quot;Aprender esta técnica ha cambiado nuestra forma de trabajar. Es algo que da alegría tanto al paciente como al médico. ¡Cada día volvemos felices a casa con la sensación de haber mejorado la calidad de vida de una persona! Eso no tiene precio. Por eso queremos que el mundo lo conozca.&quot;</p>
                        <p className="mt-2 text-text1 text-center font-semibold md:text-left">Heno Pigerl<br /> Cofundador de la escuela de P.I.T</p>
                    </div>
                </section>
                <section className="flex flex-col items-center gap-4 px-2 py-8 bg-cta-mobile bg-no-repeat bg-cover rounded-md
                                    lg:bg-cta-desktop lg:flex-row lg:justify-between lg:px-4 lg:py-12">
                    <h2 className="text-3xl text-text2 text-center font-bold lg:text-left lg:text-4xl lg:max-w-[24ch]">Comenza a cabmiar vidas hoy mismo.</h2>
                    <NavLink to="/cursos" className="p-4 text-text2 font-bold bg-text1 rounded-full transition-colors hover:bg-text2 hover:text-text1">comenzá hoy</NavLink>
                </section>
            </main>
        </>
    )
};

export default LandingPage;