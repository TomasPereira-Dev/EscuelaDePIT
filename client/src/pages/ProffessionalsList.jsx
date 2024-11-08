import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faMeh } from "@fortawesome/free-solid-svg-icons";
import ProffessionalInfo from "../components/ProffessionalInfo.jsx";
import axios from "axios";
import useSWR from "swr";
import { useCallback, useEffect, useState } from "react";

const ProffessionalsList = () => {
    
    const [list, setList] = useState([]);
    const [listIsOver, setListIsOver] = useState(false);

    const fetcher = url => axios.get(url).then(res => res.data);
    const { data } = useSWR("http://localhost:3000/profesionales" ,fetcher);

    const listLength = 25;

    const infiniteLoadHandler = useCallback (() => {
        const temp = [];
        if(data){
            for(let i = 0; i < listLength; i++){
                if(!data[i]){
                    setListIsOver(true);
                    break;
                }
                temp.push(data[i]);
            }
            setList(temp);
        }
    }, [data, listLength])

    useEffect(() => {
        infiniteLoadHandler();
    }, [infiniteLoadHandler])

    useEffect(() => {
        if(data && list.length === 0) setList(data);
    }, [data, list])

    return(
        <main className="flex flex-col gap-8 px-4 pb-16">
            <section className="relative left-1/2 -translate-x-1/2 w-screen px-4 py-8 mx-auto bg-lightBlue1 lg:py-12">
                <h1 className="text-3xl text-text2 font-bold lg:text-4xl lg:text-center">Profesionales preparados para atenderte</h1>
            </section>
            <section className="flex flex-col justify-center gap-4 lg:flex-row lg:justify-start">
                {list.length > 0 ? <>
                                    <div className="hidden items-center self-center gap-2 text-text1">
                                        <FontAwesomeIcon icon={faSliders} size="xl" /> 
                                        <p>filtrar</p>
                                    </div>
                                    <ul className="flex flex-col gap-4 w-full">
                                        {list.map(profesional => profesional.usuario_pago === true && <ProffessionalInfo data={profesional} key={profesional.key}/>)}
                                    </ul> 
                                    <span className={`${listIsOver ? "hidden" : "block"} underline self-center cursor-pointer hover:text-lightBlue1`} onClick={() => {infiniteLoadHandler(listLength + 25)}}>Ver más</span>
                                  </> 
                :   <div className="flex flex-col items-center self-center gap-2 px-4 py-16 bg-gray rounded-md lg:px-12 lg:py-24 lg:gap-4">
                        <FontAwesomeIcon className="text-text1/50" icon={faMeh} size="5x"/>
                        <h2 className="text-text1 text-center font-semibold">No hay profesionales en esta zona aún.</h2>
                        <div>
                            <p className="text-text1 text-sm text-center">Por el momento no tenemos profesionales en nuestra base de datos por esta zona.</p>
                            <p className="text-text1 text-sm text-center">¿sos medico y todavia no te registraste?</p>
                        </div>
                        <NavLink to="/contacto" className="text-text2 font-semibold px-4 py-2 bg-lightBlue1 rounded-full transition-colors hover:bg-text1">¡mandanos tus datos!</NavLink>
                    </div> 
                }
            </section>
        </main>
        
    )
}

export default ProffessionalsList;