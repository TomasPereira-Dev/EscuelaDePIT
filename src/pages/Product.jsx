const Product = () => {
    return(
        <main className="flex flex-col gap-4 px-4">
            <section className="flex flex-col items-center">
                <span className="text-xl text-grayishBlue1 font-light tracking-widest">Curso Presencial</span>
                <h1 className="text-text1 text-2xl font-bold">Curso Intensivo De P.I.T</h1>
                <p className="text-text1 text text-center">Aprende las bases del P.I.T, las mejores practicas y todo lo que nesesitas para comenzar a tratar a tus pacientes.</p>
            </section>
            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 ">
                    <div className="p-4 bg-grayishBlue1/25 rounded-md">
                        <h2 className="mb-2 text-2xl text-text1 font-bold">Incluye:</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="text-text1">Literatura currada de la mas alta calidad.</li>
                            <li className="text-text1">Tests para reafianzar tus conocimientos.</li>
                            <li className="text-text1">Videos explicativos de la mano de nuestros profesionales.</li>
                            <li className="text-text1">Certificacion profesional.</li>
                        </ul>
                    </div>
                    <div  className="flex flex-col gap-2 p-4 bg-slate-300 rounded-md">
                        <p className="text-text1 text-sm">Duracion de la cursada: 12 semanas.</p>
                        <p className="text-text1 text-sm">Clases por semana: 4, de 4 horas de duración.</p>
                        <p className="text-text1 text-sm">Pre-requisitos: lorem ipsum sit amet ...</p>
                    </div>
                    <button className="px-4 py-2 text-text2 font-bold bg-lightBlue1 rounded-md">COMPRAR</button>
                </div>
                <div>
                    <h2 className="text-text1 text-2xl font-bold mb-4">Contenido:</h2>
                    <ul className="grid grid-cols-1 gap-2">
                        <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">Introducción</li>
                        <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">¡Hola, D5W!</li>
                        <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">Casos de uso y contraindicaciónes</li>
                        <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">Mejores prácticas</li>
                        <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">Tipos de pacientes y como abordarlos</li>
                        <li className="p-4 text-text1 text-lg border border-slate-300 rounded-lg">Niños con dolor cronico</li>
                    </ul>
                </div>
            </section>


        </main>
    )
}

export default Product;