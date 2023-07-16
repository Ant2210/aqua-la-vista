import img1 from "../assets/imgs/aqua-wild-swim3.png"
import img2 from "../assets/imgs/aqua-wild-swim6.png"
import img3 from "../assets/imgs/wales.webp"
import img4 from "../assets/imgs/wild-sea-swim.jpeg"
import img5 from "../assets/imgs/aqua-wild-swim6.png"
import img6 from "../assets/imgs/aqua-wild-swim7.png"
import img7 from "../assets/imgs/aqua-wild-swim5.png"
import img8 from "../assets/imgs/aqua-wild-swim4.png"


const Article = () => {
    return (
        <div>
            <div class="article-page-intro"> 
                <h2 class="page-title"> The Health Benefits of Wild Swimming</h2>
                <p>
                    Wild swimming, also known as open water swimming (which can be more competitive) is 
                    an amazing way to enjoy being in nature and improving your physical health. Here are 
                    some great reasons to consider making wild swimming a regular activity. 
                </p>
            </div>

            <div class="article-container">
                <div class="article-img">
                    <img src={img1} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Mental well-being</h4>
                    <p>
                        Many people find that wild swimming has a positive impact on their mental health. Being 
                        in nature and engaging in physical activity releases endorphins, which can reduce stress, 
                        improve mood, and promote relaxation.
                    </p>
                </div>
            </div>

            <div class="article-container article-container-reverse">
                <div class="article-img">
                    <img src={img2} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Community and social connections</h4>
                    <p>
                        Wild swimming has gained popularity as a social activity, with many groups and communities 
                        forming around the shared interest. Joining a local wild swimming group or participating in 
                        organised events can provide opportunities to meet like-minded individuals, make new friends, 
                        and enjoy the camaraderie of a supportive community.  
                    </p>
                </div>
            </div>

            <div class="article-container">
                <div class="article-img">
                    <img src={img3} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Adventure and exploration</h4>
                    <p>
                        For some individuals, wild swimming is a way to seek adventure and explore new places. Swimming 
                        in different bodies of water, such as lakes or hidden coves, offers a sense of discovery and can 
                        be a thrilling and rewarding experience.
                    </p>
                </div>
            </div>

            <div class="article-container article-container-reverse">
                <div class="article-img">
                    <img src={img4} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Escaping the constraints of indoor pools</h4>
                    <p>
                        While swimming in a traditional pool can be enjoyable, wild swimming allows swimmers to break 
                        free from the confines of lanes and walls, providing a more immersive and liberating swimming 
                        experience.
                    </p>
                </div>
            </div>

            <div class="article-container">
                <div class="article-img">
                    <img src={img5} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Go at your own pace</h4>
                    <p>
                        Wild swimming gives you the space and opportunity you need to go as slow or as fast as you choose, 
                        in your own time, without pressure.
                    </p>
                </div>
            </div>

            <div class="article-container article-container-reverse">
                <div class="article-img">
                    <img src={img6} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Physical health benefits</h4>
                    <p>
                        Swimming is a low-impact, full-body workout that can help improve cardiovascular fitness, strength, 
                        and endurance. It engages various muscle groups and can be a refreshing alternative to traditional 
                        indoor pool swimming or other forms of exercise.
                    </p>
                </div>
            </div>

            <div class="article-container">
                <div class="article-img">
                    <img src={img7} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Aids Sleep</h4>
                    <p>
                        Enjoying a wild swim can support the increase of a hormone called prolactin in the body. 
                        Prolactin can induce sleep and may also help to improve the quality of your sleep.
                    </p>
                </div>
            </div>

            <div class="article-container article-container-reverse">
                <div class="article-img">
                    <img src={img8} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h4>Connection with nature</h4>
                    <p>
                        Wild swimming allows individuals to experience a closer connection with nature. Swimming in 
                        lakes, rivers, or the ocean provides a unique opportunity to appreciate the beauty of natural 
                        landscapes. The peacefulness and solitude of open water can also provide a sense of calm and 
                        tranquillity.
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Article;