import React from 'react'
import img1 from '../assets/imgs/Ant.PNG' 
import img2 from '../assets/imgs/Stien.PNG' 
import img3 from '../assets/imgs/Diane.PNG'
import img4 from '../assets/imgs/Jarek.PNG'
import img5 from '../assets/imgs/Aiga.PNG'   
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-main">
      <div className="article-page-intro">
        <h2 className="page-title">The Wet and Restless Team</h2>
        <p>
          The Wet & The Restless team were headed up by Scrum Master Ant who coordinated 
          the completion of this project by making sure tasks were allocated and completed 
          by each team member. Everyone was included in the design process and used their 
          individual skills during this collaboration to get their tasks completed.
        </p>
      </div>
      <div className="about-us-container">
        <div className="participant-info"> 
          <img src={img1} className="participant-img"/>
          <p> Ant 
            <a href="https://github.com/Ant2210" target="_blank">
              <span className="gitHub-icon d-inline-block">
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
        <div className="participant-info"> 
          <img src={img2} className="participant-img"/>
          <p>Stien
            <a href="https://github.com/Vanhouttestien" target="_blank">
              <span className="gitHub-icon d-inline-block">
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
        <div className="participant-info"> 
          <img src={img3} className="participant-img"/>
          <p>Diane
            <a href="https://github.com/todiane" target="_blank">
              <span className="gitHub-icon d-inline-block">
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
        <div className="participant-info"> 
          <img src={img4} className="participant-img"/>
          <p>Jarek
            <a href="https://github.com/JarekB-dev" target="_blank">
              <span className="gitHub-icon d-inline-block">
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
        <div className="participant-info"> 
          <img src={img5} className="participant-img"/>
          <p>Aiga
            <a href="https://github.com/AiGaA" target="_blank">
              <span className="gitHub-icon d-inline-block">
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
