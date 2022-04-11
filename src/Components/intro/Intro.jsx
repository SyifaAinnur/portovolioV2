import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Syifa Ain'nur</span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, <br></br>producting the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire Me!!</button>
                <div className="i-icons">
                    <a href="#">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="#">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={boy} alt="boy" />
                <img src={glassesimoji} alt="" />
                <div style={{top: '-4%', left: '58%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>

                {/* Blur div */}

                <div className="blur" style={{background: 'rgb(238 210 255)'}}>
                <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
