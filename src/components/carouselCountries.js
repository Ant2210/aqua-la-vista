import Carousel from 'react-bootstrap/Carousel';
import "../index.css";
import img from "../assets/imgs/england.webp";
import img2 from "../assets/imgs/scotland.webp";
import img3 from "../assets/imgs/northern-ireland.webp";
import img4 from "../assets/imgs/wales.webp";



function CarouselCountries() {
  return (
    <div className='carousel-main'>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100 "
            src= {img}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {img2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {img3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 "
            src= {img4}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselCountries;