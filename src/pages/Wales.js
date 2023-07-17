import React from 'react';
import '../index.css';
import img1 from '../assets/imgs/aberystwyth.jpg'
import img2 from '../assets/imgs/afon-glaslyn.jpg'
import img3 from '../assets/imgs/fairyglen-wales.webp'
import img4 from '../assets/imgs/llyn-padarn.jpg'
import img5 from '../assets/imgs/sgwd-gwladys-lady-falls-brecon-beacons.webp'
import img6 from '../assets/imgs/blue-lagoon.webp'


const Wales = () => {
  return (
    <div>
      <div className="article-page-intro"> 
          <h2 className="page-title">Welcome To Wales</h2>
          <p>
          Wales has a network of public rights of way that allow access to many water bodies. However, it's important to respect private property and access restrictions. Always check for any local signage or information regarding access rights and follow designated paths.
          </p>
          <p>Wales also has several protected areas, including national parks, nature reserves, and areas of special scientific interest. It's important to respect these areas and any specific regulations or restrictions they may have in place.</p>
      </div>

      <div className="article-container">
          <div className="article-img">
              <img src={img1} alt="Aberystwyth North Beach, Ceredigion"/>
          </div>
          <div className="article-text">
              <h4>Aberystwyth North Beach, Ceredigion</h4>
              <p>
              Aberystwyth North Beach, located on the west coast of Wales, is a sandy beach that provides opportunities for wild swimming. With its beautiful views of Cardigan Bay and the surrounding hills, it's a popular spot for locals and visitors alike.
              </p>
          </div>
      </div>

      <div className="article-container article-container-reverse">
          <div className="article-img">
              <img src={img2} alt="Afon Glaslyn, Beddgelert"/>
          </div>
          <div className="article-text">
              <h4>Afon Glaslyn, Beddgelert</h4>
              <p>
              The Afon Glaslyn is a river that flows through the picturesque village of Beddgelert in Snowdonia. Its clear waters, framed by mountains and forests, offer an idyllic setting for wild swimming and a chance to cool off in natural surroundings.  
              </p>
          </div>
      </div>

      <div className="article-container">
          <div className="article-img">
              <img src={img3} alt="Fairy Glen, Betws-y-Coed"/>
          </div>
          <div className="article-text">
              <h4>Fairy Glen, Betws-y-Coed</h4>
              <p>
              The Fairy Glen is a hidden gem nestled in the village of Betws-y-Coed in Snowdonia. This picturesque gorge features rock pools and small waterfalls, providing a peaceful and secluded spot for wild swimming.
              </p>
          </div>
      </div>

      <div className="article-container article-container-reverse">
          <div className="article-img">
              <img src={img4} alt="Llyn Padarn, Snowdonia"/>
          </div>
          <div className="article-text">
              <h4>Llyn Padarn, Snowdonia</h4>
              <p>
              Located in the heart of Snowdonia National Park, Llyn Padarn is a beautiful glacial lake that offers breathtaking scenery and clear waters for wild swimming. Surrounded by mountains, it provides a serene setting for a refreshing dip.
              </p>
          </div>
      </div>

      <div className="article-container">
          <div className="article-img">
              <img src={img5} alt="Sgwd Gwladus, Brecon Beacons"/>
          </div>
          <div className="article-text">
              <h4>Sgwd Gwladus, Brecon Beacons</h4>
              <p>
              Sgwd Gwladus, also known as Lady Falls, is a stunning waterfall located in the Brecon Beacons National Park. The pool at the base of the waterfall offers a magical spot for wild swimming, surrounded by lush greenery and cascading water.
              </p>
          </div>
      </div>

      <div className="article-container article-container-reverse">
          <div className="article-img">
              <img src={img6} alt="Blue Lagoon, Pembrokeshire"/>
          </div>
          <div className="article-text">
              <h4>Blue Lagoon, Pembrokeshire</h4>
              <p>
              The Blue Lagoon, near Abereiddy in Pembrokeshire, is a former slate quarry that has been transformed into a stunning natural swimming pool. With its deep blue waters and rocky cliffs, it's a popular spot for adventurous swimmers.
              </p>
          </div>
      </div>
    </div>
  );
};

export default Wales