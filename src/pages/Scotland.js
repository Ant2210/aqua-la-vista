import React from 'react';
import '../index.css';
import img1 from '../assets/imgs/fairy-pools.jpg'
import img2 from '../assets/imgs/loch-an-eilein.png'
import img3 from '../assets/imgs/loch-ard.jpg'
import img4 from '../assets/imgs/Hero_Loch_Lomond.jpg'
import img5 from '../assets/imgs/loch-morlich.jpg'
import img6 from '../assets/imgs/loch-tay.jpeg'


const Scotland = () => {
  return (
    <div>
      <div className="article-page-intro"> 
          <h2 className="page-title">Welcome To Scotland</h2>
          <p>
          The Scottish Outdoor Access Code provides guidance for recreational activities, including wild swimming. When engaging in wild swimming, it's important to consider safety, water quality, and any local regulations that may be in place.
          </p>
          <p>Additionally, always respect the environment and other users of the area - especially local residents -  to ensure a positive and sustainable experience for everyone.</p>
      </div>

      <div className="article-container">
          <div className="article-img">
              <img src={img1} alt="Fairy Pools, Isle of Skye"/>
          </div>
          <div className="article-text">
              <h4>Fairy Pools, Isle of Skye</h4>
              <p>
              The Fairy Pools, located in Glen Brittle on the Isle of Skye, are a series of crystal-clear pools and waterfalls fed by the River Brittle. This enchanting location provides a magical setting for wild swimming, surrounded by breathtaking scenery.
              </p>
          </div>
      </div>

      <div className="article-container article-container-reverse">
          <div className="article-img">
              <img src={img2} alt="Loch an Eilein, Rothiemurchus"/>
          </div>
          <div className="article-text">
              <h4>Loch an Eilein, Rothiemurchus</h4>
              <p>
              Loch an Eilein, located near Aviemore in the Rothiemurchus Estate, offers a picturesque setting for wild swimming. This tranquil loch, surrounded by ancient Caledonian pine forest and the ruins of a 13th-century castle, provides a unique swimming experience.  
              </p>
          </div>
      </div>

      <div className="article-container">
          <div className="article-img">
              <img src={img3} alt="Loch Ard, Trossachs National Park"/>
          </div>
          <div className="article-text">
              <h4>Loch Ard, Trossachs National Park</h4>
              <p>
              Located in the Trossachs National Park, Loch Ard is a picturesque loch with tranquil waters and wooded shores. It offers an ideal setting for wild swimming, surrounded by beautiful landscapes and plenty of nature to explore.
              </p>
          </div>
      </div>

      <div className="article-container article-container-reverse">
          <div className="article-img">
              <img src={img4} alt="Loch Lomond"/>
          </div>
          <div className="article-text">
              <h4>Loch Lomond</h4>
              <p>
              As one of Scotland's largest and most scenic freshwater lochs, Loch Lomond offers numerous opportunities for wild swimming. With its stunning landscapes, tranquil bays, and clear waters, it's a popular destination for swimmers of all levels.
              </p>
          </div>
      </div>

      <div className="article-container">
          <div className="article-img">
              <img src={img5} alt="Loch Morlich, Cairngorms National Park"/>
          </div>
          <div className="article-text">
              <h4>Loch Morlich, Cairngorms National Park</h4>
              <p>
              Situated in the heart of the Cairngorms National Park, Loch Morlich is a freshwater loch known for its scenic beauty. With its sandy beach and clear waters, it's an inviting spot for wild swimming, especially during the summer months.
              </p>
          </div>
      </div>

      <div className="article-container article-container-reverse">
          <div className="article-img">
              <img src={img6} alt="Loch Tay, Perthshire"/>
          </div>
          <div className="article-text">
              <h4>Loch Tay, Perthshire</h4>
              <p>
              Loch Tay is a large freshwater loch in Perthshire, surrounded by stunning mountains and rolling hills. Its calm waters and beautiful surroundings make it an excellent spot for wild swimming, with plenty of secluded spots to explore.
              </p>
          </div>
      </div>
    </div>
  );
};

export default Scotland