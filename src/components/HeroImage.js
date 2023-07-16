/* Hero Image and a headline */
import img from "../assets/imgs/wild-sea-swim.jpeg";

const HeroImage = () => {
    return (
        <div class="hero hero-background">
            <div class="hero-header">
                <h1> Aqua La Vista </h1>
                <h4>Saying Goodbye to Boring Pools, Hello to Wild Swimming Excitement!</h4>
            </div>
            <div class="hero-img-container">
                <img src={img} class="hero-image" alt="Man swimming the sea" />
            </div>
        </div>
    );
};

export default HeroImage;