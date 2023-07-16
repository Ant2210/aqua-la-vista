/* Hero Image and a headline */
import img from "../assets/imgs/wild-sea-swim.jpeg";

const HeroImage = () => {
    return (
        <div className="hero hero-background">
            <div className="hero-header">
                <h1> Aqua La Vista </h1>
                <h4>Saying Goodbye to Boring Pools, Hello to Wild Swimming Excitement!</h4>
            </div>
            <div className="hero-img-container">
                <img src={img} className="hero-image" alt="Woman swimming the sea" />
            </div>
        </div>
    );
};

export default HeroImage;