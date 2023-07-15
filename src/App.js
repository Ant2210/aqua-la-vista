import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";

function App() {
    return (
        <>
            <PageNav />
            <HeroImage />
            <Footer />
        </>
    );
}

export default App;
