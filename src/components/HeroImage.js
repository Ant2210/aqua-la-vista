/* Hero Image and a headline */
import img from "../assets/imgs/aqua-wild-swim3.png";
import "../assets/imgs/sea.jpg";

const HeroImage = () => {
    return (
        <div class="hero">
            <div class="hero-header">
                <h1> Aqua La Vista </h1>
                <h4>Saying Goodbye to Boring Pools, Hello to Wild Swimming Excitement!</h4>
            </div>
            <img src={img} class="hero-image" alt="Woman swimming the sea" />
        </div>
    );
};

export default HeroImage;