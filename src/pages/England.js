import React from 'react';
import '../index.css';
import img1 from '../assets/imgs/gaddings-dam-england.webp'
import img2 from '../assets/imgs/hampstead-ponds.jpg'
import img3 from '../assets/imgs/cumbria-lake-district.jpeg'
import img4 from '../assets/imgs/lulworth-cove.jpg'
import img5 from '../assets/imgs/river-dart.jpg'
import img6 from '../assets/imgs/river-wye.jpg'


    const England = () => {
        return (
          <div>
            <div className="article-page-intro"> 
                <h2 className="page-title">Welcome To England</h2>
                <p>
                In England, the "right to roam" allows public access to certain land, including rivers, lakes, and coastal areas. However, this does not grant unrestricted access to all private land.
                </p>
                <p>Respect signs and boundaries, seek permission when necessary, and follow any local regulations or guidance.</p>
            </div>

            <div className="article-container">
                <div className="article-img">
                    <img src={img1} alt="People swimming in the open water"/>
                </div>
                <div className="article-text">
                    <h4>Gaddings Dam, West Yorkshire</h4>
                    <p>
                    Known unofficially as the highest beach in the country, Gaddings Dam is located above the town of Todmorden, which sits on the boundary between Yorkshire and Lancashire. It has a real (small) sand beach and is not too far from the Pennine Way. You have to walk to get there and be prepared to share the space with cows.
                    </p>
                </div>
            </div>

            <div className="article-container article-container-reverse">
                <div className="article-img">
                    <img src={img2} alt="People swimming in the open water"/>
                </div>
                <div className="article-text">
                    <h4>Hampstead Ponds, London</h4>
                    <p>
                    Located within Hampstead Heath, the Hampstead Ponds offer a unique wild swimming experience in the heart of London. The three freshwater swimming ponds—Hampstead Mixed Pond, Hampstead Men's Pond, and Hampstead Ladies' Pond—are popular among locals.  
                    </p>
                </div>
            </div>

            <div className="article-container">
                <div className="article-img">
                    <img src={img3} alt="People swimming in the open water"/>
                </div>
                <div className="article-text">
                    <h4>Lake District, Cumbria</h4>
                    <p>
                    With its stunning lakes and picturesque landscapes, the Lake District offers numerous opportunities for wild swimming. Places like Lake Windermere, Derwentwater, Buttermere, and Ullswater are popular choices for swimmers seeking tranquility and natural beauty.
                    </p>
                </div>
            </div>

            <div className="article-container article-container-reverse">
                <div className="article-img">
                    <img src={img4} alt="People swimming in the open water"/>
                </div>
                <div className="article-text">
                    <h4>Lulworth Cove, Dorset</h4>
                    <p>
                    Lulworth Cove is a beautiful natural harbor along the Jurassic Coast in Dorset. The sheltered cove features clear turquoise waters, making it a popular spot for wild swimmers looking to take a dip in the sea while surrounded by breathtaking cliffs.
                    </p>
                </div>
            </div>

            <div className="article-container">
                <div className="article-img">
                    <img src={img5} alt="People swimming in the open water"/>
                </div>
                <div className="article-text">
                    <h4>River Dart, Dartmoor</h4>
                    <p>
                    The River Dart in Dartmoor National Park provides idyllic settings for wild swimming. The river features deep pools, waterfalls, and clear water. The area around Dartmeet is particularly renowned for swimming.
                    </p>
                </div>
            </div>

            <div className="article-container article-container-reverse">
                <div className="article-img">
                    <img src={img6} alt="People swimming in the open water"/>
                </div>
                <div className="article-text">
                    <h4>River Wye, Herefordshire</h4>
                    <p>
                    The River Wye, which flows through the stunning Wye Valley, offers excellent wild swimming opportunities. The river boasts crystal-clear waters, sandy beaches, and peaceful stretches perfect for a refreshing swim.
                    </p>
                </div>
            </div>
          </div>



  );
};

export default England
