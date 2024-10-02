import Faq from "../components/Faq.jsx";


const About = () => {
    return(
        <main className="relative flex flex-col items-center gap-8 px-4">
            <section className="flex flex-col items-center">
                <figure>
                    <picture>
                        <img src="./liftogt.png" alt="el doctor liftogt dando catedra junto a un paciente" />
                    </picture>
                    <figcaption className="text-sm text-text1 italic">El doctor John Liftogt enseñando junto a un paciente</figcaption>
                </figure>
                <h2 className="text-3xl text-text1 text-center font-bold my-8">Nuestra Historia</h2>
                <div className="flex flex-col gap-4">
                    <p className="text-text1">En 2010, el Dr. John Lyftogt descubrió en Nueva Zelanda un tratamiento efectivo para el dolor causado por las fibras C. Fue el primero en usar D5W (dextrosa al 5% en agua estéril) para tratar los nervios dolorosos e inhibir el dolor neuropático crónico En 2014.</p>
                    <p>tras el Congreso Argentino de Medicina General y Familiar, los doctores Zárate Miguel, Ninin Laura y Fuso Miguel decidieron invitar al Dr. John Lyftogt a dictar un curso en Argentina.</p>
                    <p>La llegada del Dr. Lyftogt y su curso básico permitió que todos los asistentes pudieran, por primera vez, ayudar a sus pacientes a disminuir su dolor crónico y mejorar su calidad de vida... <span className="underline cursor-pointer">leer más</span></p>
                </div>
            </section>
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-3xl text-text1 text-center font-bold my-8">Nuestro equipo</h2>
                <div className="relative z-10 rounded overflow-hidden">
                    <picture>
                        <img src="./ricardoFrusso.png" alt="el doctor Ricardo Frusso sonriendo para la camara" />
                    </picture>
                    <div className="absolute bottom-0 z-20 p-2 w-full bg-text1/45">
                        <h2 className="text-2xl text-text2 font-semibold">Dr. Ricardo Frusso</h2>
                        <p className="text-xl text-text2 font-semibold">Universidad de Buenos Aires.</p>
                    </div>
                </div>
                <div className="relative z-10 rounded overflow-hidden">
                    <picture>
                        <img src="./henoPigerl.png" alt="el doctor Heno Pigerl tratando a un paciente" />
                    </picture>
                    <div className="absolute bottom-0 z-20 p-2 w-full bg-text1/45">
                        <h2 className="text-2xl text-text2 font-semibold">Dr. Heno Pigerl</h2>
                        <p className="text-xl text-text2 font-semibold">Universidad X.</p>
                    </div>
                </div>
            </section>
            <section className="relative left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-4 py-12 px-4 mx-auto w-screen bg-lightBlue1">
                <h2 className="text-3xl text-text2 text-center font-bold">PREGUNTAS FRECUENTES</h2>
                <Faq />
            </section>
        </main>
    );
};

export default About;