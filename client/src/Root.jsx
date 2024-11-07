import { ScrollRestoration, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProffessionalsList from "./pages/ProffessionalsList.jsx";
import Courses from "./pages/Courses.jsx";
import Product from "./pages/Product.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Root = () => {
    return(
        <>
        <Header />
            <ScrollRestoration />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/profesionales" element={<ProffessionalsList />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/cursos/:curso" element={<Product />} />
            </Routes>
        <Footer />    
        </>
    );
}


export default Root;