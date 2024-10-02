import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faMeh } from "@fortawesome/free-solid-svg-icons";
import List from "../components/List.jsx";

const ProffessionalsList = () => {

    const DB = [];

    return(
        <main className="flex flex-col gap-8 px-4 pb-16">
            <section className="relative left-1/2 -translate-x-1/2 w-screen px-4 py-8 mx-auto bg-lightBlue1">
                <h1 className="text-3xl text-text2 font-bold">Profesionales preparados para atenderte</h1>
            </section>
            <section className="flex flex-col justify-center gap-4">
                { DB.length > 0 ? <>
                                    <div className="flex items-center self-center gap-2 text-text1">
                                        <FontAwesomeIcon icon={faSliders} size="xl" /> 
                                        <p>filtrar</p>
                                    </div>
                                    <List /> 
                                    <span className="underline self-center">Ver más</span>
                                  </> 
                :   <div className="flex flex-col gap-2 items-center px-4 py-16 bg-gray rounded-md">
                        <FontAwesomeIcon className="text-text1/50" icon={faMeh} size="5x"/>
                        <h2 className="text-text1 text-center font-semibold">No hay profesionales en esta zona aún.</h2>
                        <div>
                            <p className="text-text1 text-sm text-center">Por el momento no tenemos profesionales en nuestra base de datos por esta zona.</p>
                            <p className="text-text1 text-sm text-center">¿sos medico y todavia no te registraste?</p>
                        </div>
                        <a href="/" className="text-text2 font-semibold px-4 py-2 bg-lightBlue1 rounded-full">¡sumate ya!</a>
                    </div> 
                }
            </section>
        </main>
        
    )
}

export default ProffessionalsList;