import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";

const AppLayout = ({children}) => {
    return(
        <>
        <Header/>
            {...children}
        <Footer/>
        </>
    )    
}

export default AppLayout;