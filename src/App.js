import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";
import EventsList from "./components/EventsList";
import CarouselCountries from "./components/carouselCountries";


function App() {
    return (
        <>
            <PageNav />
            <HeroImage />
            <CarouselCountries />
            <EventsList />
            <Footer />
        </>
    );
}

export default App;
