import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import useSWR from "swr";

const Product = () => {
    const { param } = useParams();

    const fetcher = url => axios.get(url).then(res => res.data);
    const { data } = useSWR(`https://escuela-de-pit-server.vercel.app/cursos?slug=${param}` , fetcher);


    const ContentListItem = ({contentData}) => {
        return(
            <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">{contentData}</li>
        )
    };

    const contentArr = data ? data[0].contenido : [];

    const contentMap = contentArr.map((item, index) => <ContentListItem key={`content-${index}`} contentData={item}/> );

    if (data) return(
        <main className="flex flex-col gap-4 p-4 mb-12 lg:gap-12">
            <section className="flex flex-col items-center lg:items-start">
                <span className="text-xl text-grayishBlue1 font-light tracking-widest">Curso {data[0].modalidad}</span>
                <h1 className="text-text1 text-2xl font-bold lg:text-4xl">{data[0].titulo}</h1>
                <p className="text-text1 text text-center lg:text-left lg:max-w-[46ch]">{data[0].subtitulo}</p>
            </section>
            <section className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col gap-4">
                    <div className="p-4 bg-grayishBlue1/25 rounded-md">
                        <h2 className="mb-2 text-2xl text-text1 font-bold">Incluye:</h2>
                        <ul className="flex flex-col gap-2">
                            {data[0].incluye.map((item, index) => <li key={`incluye-${index}`}>{item}</li>)}
                        </ul>
                    </div>
                    <div  className="flex flex-col gap-2 p-4 bg-slate-300 rounded-md">
                        <p className="text-text1  font-bold">precio: ${data[0].precio}</p>
                        <p className="text-text1 text-sm">duración: {data[0].otros.duracion}</p>
                        <p className="text-text1 text-sm">clases: {data[0].otros.clases}.</p>
                        <p className="text-text1 text-sm">Pre-requisitos: {data[0].otros.preRequisitos}</p>
                    </div>
                    {data[0].modalidad === "presencial" ? <NavLink to="/contacto" className="px-4 py-2 text-text2 text-center font-bold bg-lightBlue1 rounded-md transition-colors hover:bg-text1">CONTACTANOS Y RESERVA TU VACANTE</NavLink> : <button className="px-4 py-2 text-text2 font-bold bg-lightBlue1 rounded-md transition-colors hover:bg-text1">COMPRAR</button>}
                </div>
                <div className="col-span-2">
                    <h2 className="text-text1 text-2xl font-bold my-4">Contenido:</h2>
                    <ul className="grid grid-cols-1 gap-2">
                        {contentMap}
                    </ul>
                </div>
            </section>
        </main>
    )

    return(
        <div>
            
        </div>
    )
}

export default Product;