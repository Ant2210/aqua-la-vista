import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";
<<<<<<< HEAD
import EventsList from "./components/EventsList";
=======
import Footer from "./components/Footer";
>>>>>>> main

function App() {
    return (
        <>
            <PageNav />
<<<<<<< HEAD
            <EventsList/>
            <div className="container text-center">              
              <Button variant="primary">Hello</Button>{" "}
              <Button variant="secondary" className="my-2">
                  From{" "}
              </Button>{" "}
              <Button variant="success">Bootstrap</Button>{" "}
            </div>
=======
            <Footer />
>>>>>>> main
        </>
    );
}

export default App;
