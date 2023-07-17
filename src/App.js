import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PageNav from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Benefits from "./pages/Benefits";
import Ireland from "./pages/Ireland";
import England from "./pages/England";
import Scotland from "./pages/Scotland";
import Wales from "./pages/Wales";
import ResearchPage from "./pages/ResearchPage";


function App() {
    return (
        <>
        <PageNav/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/benefits" element={<Benefits/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/england" element={<England />} />
            <Route path="/ireland" element={<Ireland />} />
            <Route path="/scotland" element={<Scotland/>} />
            <Route path="/wales" element={<Wales />} />
            <Route path="/research" element={<ResearchPage/>} />

            </Routes>
        <Footer/>

        </>
    );
}

export default App;
