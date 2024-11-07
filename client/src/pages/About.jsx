import Faq from "../components/Faq.jsx";

const About = () => {

    return(
        <main className="relative flex flex-col gap-8 px-4">
            <section className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-8">
                <figure>
                    <picture>
                        <source srcSet="./liftogt-desktop.webp " media="(min-width: 1024px)" />
                        <img className="w-full" src="./liftogt.webp" alt="el doctor liftogt dando catedra junto a un paciente" />
                    </picture>
                    <figcaption className="text-sm text-text1 italic">El doctor John Liftogt enseñando junto a un paciente</figcaption>
                </figure>
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl text-text1  font-bold lg:text-5xl">Nuestra Historia</h2>
                        <p className="text-text1 md:max-w-[64ch]">En 2010, el Dr. John Lyftogt inventó en Nueva Zelanda un tratamiento efectivo para el dolor. Fue el primero en usar Dextrosa al 5% en agua estéril isotónica para tratar los nervios dolorosos e inhibir el dolor neuropático agudo y crónico.</p>
                        <p className="text-text1 md:max-w-[64ch]">En 2014 tras participar en el Congreso Argentino de Medicina General y Familiar, los doctores Ricardo Frusso, Miguel Zárate y Laura Ninin invitaron al Dr. John Lyftogt a dictar un curso en el Hospital Italiano de Buenos Aires. Desde 2015 a 2019 dieron 5 cursos básicos y 4 Master Class formando a unos 300 médicos para que pudieran ayudar a sus pacientes a disminuir su dolor y mejorar su calidad de vida.</p>
                        <p className="text-text1 md:max-w-[64ch]">En 2024, John Lyftogt anunció su retiro de la enseñanza a nivel mundial y nombró a cuatro médicos en Argentina capacitados para enseñar su técnica. Conmovidos, decidimos continuar su legado. Así el Heno Pigerl y Ricardo Frusso crearon “Escuela de PIT”, un proyecto que honra a John y Maria Lyftogt para enseñar la práctica de PIT a la mayor cantidad de personas posible.</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl text-text1 font-bold lg:text-5xl">Nuestra misión</h2>
                        <p className="text-text1 md:max-w-[64ch]">Enseñar a los profesionales de la salud a tratar el dolor de manera segura, efectiva y libre de drogas.</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl text-text1 font-bold lg:text-5xl">Nuestro metodo</h2>
                        <p className="text-text1 md:max-w-[64ch]">Nuestro método innovador asegura que aprendas primero lo más útil y lo hagas de manera que nunca lo olvides.</p>
                        <p className="text-text1 md:max-w-[64ch]">Combinamos cursos presenciales, virtuales, foros, página web e Instagram para que pronto puedas comenzar a tratar a tus pacientes. Después de cada curso, comienza la acción y la magia de poder tratar a tus pacientes y devolver una sonrisa al mundo. Te guiaremos desde el primer minuto y permaneceremos en contacto permanente para </p>
                    </div>   
                </div>
            </section>
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-3xl text-text1 text-center font-bold my-8">Nuestro equipo</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="relative z-10 rounded overflow-hidden">
                        <picture>
                            <source srcSet="./ricardoFrusso-desktop.webp" media="(min-width: 1024px)" />
                            <img src="./ricardoFrusso.webp" alt="el doctor Ricardo Frusso sonriendo para la camara" />
                        </picture>
                        <div className="absolute bottom-0 z-20 p-2 w-full bg-text1/45">
                            <h2 className="text-2xl text-text2 font-semibold">Dr. Ricardo Frusso</h2>
                            <p className="text-xl text-text2 font-semibold">Universidad de Buenos Aires.</p>
                            <p className="text-xl text-text2 font-semibold">MN. 86498</p>
                        </div>
                    </div>
                    <div className="relative z-10 rounded overflow-hidden">
                        <picture>
                            <source srcSet="./henoPigerl-desktop.webp" media="(min-width: 1024px)" />
                            <img src="./henoPigerl.webp" alt="el doctor Heno Pigerl tratando a un paciente" />
                        </picture>
                        <div className="absolute bottom-0 z-20 p-2 w-full bg-text1/45">
                            <h2 className="text-2xl text-text2 font-semibold">Dr. Heno Pigerl</h2>
                            <p className="text-xl text-text2 font-semibold">Universidad de Buenos Aires.</p>
                            <p className="text-xl text-text2 font-semibold">MN. 194643</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-4 px-4 py-12 mx-auto w-screen bg-lightBlue1">
                <h2 className="text-3xl text-text2 text-center font-bold lg:text-4xl">PREGUNTAS FRECUENTES</h2>
                <Faq />
            </section>
        </main>
    );
};

export default About;