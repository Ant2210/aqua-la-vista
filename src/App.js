import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";
import PageNav from "./components/Navbar";
import EventsList from "./components/EventsList";

function App() {
    return (
        <>
            <PageNav />
            <EventsList/>
            <div className="container text-center">              
              <Button variant="primary">Hello</Button>{" "}
              <Button variant="secondary" className="my-2">
                  From{" "}
              </Button>{" "}
              <Button variant="success">Bootstrap</Button>{" "}
            </div>
        </>
    );
}

export default App;
