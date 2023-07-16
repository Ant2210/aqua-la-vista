import img from "../assets/imgs/aqua-wild-swim6.png"

const Article = () => {
    return (
        <div>
            <div> 
                <h1 class="page-title"> Title </h1>
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

            <div class="article-container">
                <div class="article-img">
                    <img src={img} alt="People swimming in the open water"/>
                </div>
                <div class="article-text">
                    <h3>Article title</h3>
                    <p>Dummy text </p>
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

            <div class="article-container">
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