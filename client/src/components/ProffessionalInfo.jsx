const ProffessionalInfo = ({data}) => {
    return(
        <li className="flex items-center justify-between gap-2 p-2 bg-lightBlue2 rounded-md">
            <div className="flex items-center gap-4">
                <div>
                    <p className="text-text1 text-sm font-semibold lg:text-base">{data.nombre}</p>
                    <p className="text-text1 text-sm font-semibold lg:text-base">{data.direccion}, {data.barrio}</p>
                    <p className="text-text1 text-sm font-semibold lg:text-base">{data.provincia}, {data.localidad}</p>
                </div>
            </div>
            <div className="text-text2 text-sm text-center font-bold px-2 py-1 bg-lightBlue1 rounded-lg lg:text-base lg:p-4">
                <p className="lg:hidden">llame al <br/> {data.telefono}</p>
                <p className="hidden lg:block">llame al {data.telefono}</p>
            </div>
        </li>
    )
}

export default ProffessionalInfo;