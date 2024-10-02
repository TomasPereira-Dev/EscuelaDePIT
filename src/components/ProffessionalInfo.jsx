const ProffessionalInfo = () => {
    return(
        <li className="flex items-center justify-between gap-2 p-2 bg-lightBlue2 rounded-md">
            
            <div className="flex items-center gap-4">
                <img src="./pfp.png" alt="imagen de perfil de John Doe" />
                <div>
                    <p className="text-text1 text-sm font-semibold">Dr. John Doe</p>
                    <p className="text-text1 text-sm font-semibold">Buenos Aires, C.A.B.A</p>
                </div>
            </div>
            <p className="text-text1 text-sm text-center font-bold px-2 py-1 bg-green rounded-lg">desde $68.000</p>
        </li>
    )
}

export default ProffessionalInfo;