import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";

import EventsList from "./components/EventsList";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


function App() {
    return (
        <>
        <PageNav/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/aqua-la-vista/about" element={< About/>} />
            <Route path="/aqua-la-vista/blog" element={< Blog/>} />
            <Route path="/aqua-la-vista/contact" element={< Contact/>} />
            </Routes>
        <Footer/>

        </>
    );
}

export default App;
