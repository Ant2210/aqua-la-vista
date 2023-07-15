import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";
import EventsList from "./components/EventsList";

function App() {
    return (
        <>
            <PageNav />

            <EventsList />
            <Footer />
        </>
    );
}

export default App;
