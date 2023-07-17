import Carousel from 'react-bootstrap/Carousel';
import "../index.css";
import img from "../assets/imgs/england.webp";
import img2 from "../assets/imgs/scotland.jpg";
import img3 from "../assets/imgs/ireland.jpg";
import img4 from "../assets/imgs/wales.webp";
import { Link } from 'react-router-dom';



function CarouselCountries() {
  return (
    <div className='carousel-main'>
        <Carousel fade >
        <Carousel.Item>
            <Link as= {Link} to="/england">
            <img
            className="d-block w-100 "
            src= {img}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>England</h3>
            </Carousel.Caption>
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link as= {Link} to="/scotland">
            <img
            className="d-block w-100"
            src= {img2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Scotland</h3>
            </Carousel.Caption>
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link as= {Link} to="/ireland">
            <img
            className="d-block w-100"
            src= {img3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Ireland</h3>
            </Carousel.Caption>
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link as={Link} to="/wales">
            <img
            className="d-block w-100 "
            src= {img4}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Wales</h3>
            </Carousel.Caption>
            </Link>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselCountries;