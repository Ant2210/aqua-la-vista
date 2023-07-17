import React from 'react';
import '../index.css';
import img1 from '../assets/imgs/ireland.jpg'
import img2 from '../assets/imgs/inch-beach.jpg'
import img3 from '../assets/imgs/lough-gill.jpg'
import img4 from '../assets/imgs/lough-hyne.jpg'
import img5 from '../assets/imgs/Salthill-Galway.jpg'
import img6 from '../assets/imgs/silver-strand-malin-beg-DSC0028.jpg'


    const Ireland = () => {
        return (
          <div>
            <div className="article-page-intro"> 
                <h2 className="page-title">Welcome To Ireland</h2>
                <p>
                In Ireland, there is a tradition of access to the countryside and natural water bodies. As long as you respect the environment, local regulations, and private property rights, you can usually enjoy wild swimming in rivers, lakes, and coastal areas.
      When engaging in wild swimming, it's important to consider safety, water quality, and any local regulations that may be in place. Additionally, always respect the environment and other users of the area - especially local residents -  to ensure a positive and sustainable experience for everyone.
                </p>
                <p>Be mindful of any local regulations or restrictions that may apply to specific areas. Some water bodies or beaches may have specific bylaws, designated swimming areas, or seasonal restrictions. Check with local authorities or signs for any specific rules.</p>
            </div>

            <div className="article-container">
                <div className="article-img">
                    <img src={img1} alt="Glendalough Upper Lake, County Wicklow"/>
                </div>
                <div className="article-text">
                    <h4>Glendalough Upper Lake, County Wicklow</h4>
                    <p>
                    Nestled within the picturesque Glendalough Valley, the Upper Lake in County Wicklow offers an enchanting setting for wild swimming. Surrounded by stunning mountains and lush forests, this freshwater lake provides a refreshing escape for swimmers.
                    </p>
                </div>
            </div>

            <div className="article-container article-container-reverse">
                <div className="article-img">
                    <img src={img2} alt="Inch Beach, County Kerry"/>
                </div>
                <div className="article-text">
                    <h4>Inch Beach, County Kerry</h4>
                    <p>
                    Situated on the Dingle Peninsula, Inch Beach is a long, sandy stretch that provides an ideal location for wild swimming. With its Atlantic waves and scenic surroundings, this Blue Flag beach offers a unique swimming experience.
                    </p>
                </div>
            </div>

            <div className="article-container">
                <div className="article-img">
                    <img src={img3} alt="Lough Gill, County Sligo"/>
                </div>
                <div className="article-text">
                    <h4>Lough Gill, County Sligo</h4>
                    <p>
                    Lough Gill, located near Sligo town, is a picturesque freshwater lake offering numerous swimming opportunities. Surrounded by scenic woodlands and mountains, this peaceful lake provides a serene setting for a wild swim.
                    </p>
                </div>
            </div>

            <div className="article-container article-container-reverse">
                <div className="article-img">
                    <img src={img4} alt="Lough Hyne, County Cork"/>
                </div>
                <div className="article-text">
                    <h4>Lough Hyne, County Cork</h4>
                    <p>
                    Located near Skibbereen in County Cork, Lough Hyne is a saltwater lake renowned for its exceptional beauty and calm waters. This marine lake provides a tranquil setting for swimmers, surrounded by lush hills and stunning scenery.
                    </p>
                </div>
            </div>

            <div className="article-container">
                <div className="article-img">
                    <img src={img5} alt="Salthill Quarry, County Galway"/>
                </div>
                <div className="article-text">
                    <h4>Salthill Quarry, County Galway</h4>
                    <p>
                    Located near the coastal city of Galway, Salthill Quarry is a hidden gem for wild swimming. The crystal-clear waters of this former quarry create a serene swimming spot, often attracting locals and visitors seeking a refreshing dip.
                    </p>
                </div>
            </div>

            <div className="article-container article-container-reverse">
                <div className="article-img">
                    <img src={img6} alt="Silver Strand, County Donegal"/>
                </div>
                <div className="article-text">
                    <h4>Silver Strand, County Donegal</h4>
                    <p>
                    Tucked away near Malin Beg in County Donegal, Silver Strand is a secluded beach that is perfect for wild swimming. Its pristine waters and picturesque surroundings, including dramatic cliffs, make it a truly magical spot.
                    </p>
                </div>
            </div>
          </div>
  );
};

export default Ireland
