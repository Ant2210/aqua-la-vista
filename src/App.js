import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";

function App() {
    return (
        <>
            <PageNav />
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
