import img from "../assets/imgs/aqua-wild-swim6.png"

const Article = () => {
    return (
        <div>
            <div> 
                <h2 class="page-title"> Wellness Blog </h2>
            </div>

            <div class="article-container">
                <div class="article-img">
                    <img src={img} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h3>Article title</h3>
                    <p>Dummy text People swimming in the open waterPeople swimming in the open waterPeople swimming in the open waterPeople swimming in the open waterPeople swimming in the open water</p>
                </div>
            </div>

            <div class="article-container article-container-reverse">
                <div class="article-img">
                    <img src={img} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h3>Article title</h3>
                    <p>Dummy text  </p>
                </div>
            </div>

            <div class="article-container">
                <div class="article-img">
                    <img src={img} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h3>Article title</h3>
                    <p>Dummy text </p>
                </div>
            </div>

            <div class="article-container article-container-reverse">
                <div class="article-img">
                    <img src={img} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h3>Article title</h3>
                    <p>Dummy text </p>
                </div>
            </div>
            
        </div>
    );
};

export default Article;