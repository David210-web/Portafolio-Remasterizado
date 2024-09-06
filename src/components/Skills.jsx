import React from 'react';
import TitleSection from './TitleSection';
import SkillSection from './SkillSection';
import Slider from "react-slick";
//imagenes frontend
import HtmlPic from '../assets/html.png';
import CssPic from '../assets/css.png';
import JavascriptPic from '../assets/javascript.png';
import ReactPic from '../assets/react.png';
import AstroPic from '../assets/astro.png';
//imagenes backend
import NetCorePic from '../assets/netcore.png';
import NodeJsPic from '../assets/nodejs.png';
import SpringPic from '../assets/spring.png';
import Expressjs from '../assets/expressj.png';
//imagenes base de datos
import SqlServerPic from '../assets/sqlserver.png';
import Mysql from '../assets/mysql.png';
//imagenes de habilidades extras
import ReactNativePic from '../assets/reactnative.png';
import gitPic from '../assets/git.png';
import githubPic from '../assets/GitHub.png';
import firebasePic from '../assets/firebase.png';
import SolidPic from '../assets/solid.png';

function Skills({isEnglish}) {
  const frontendSkills = [
    { image: HtmlPic, altText: "HTML" },
    { image: CssPic, altText: "CSS" },
    { image: JavascriptPic, altText: "JavaScript" },
    { image: ReactPic, altText: "React" },
    { image: AstroPic, altText: "Astro" }
  ];

  const backendSkills = [
    { image: NetCorePic, altText: "C# (Net Core)" },
    { image: NodeJsPic, altText: "Js (Node js)" },
    { image: SpringPic, altText: "Java (Spring Boot)" },
    { image: Expressjs, altText: "Nodejs (Express js)" },
  ];

  const baseDeDatos = [
    { image: SqlServerPic, altText: "Sql Server (Windows)" },
    { image: Mysql, altText: "Mysql" },
    
  ]

  const extras = [
    { image: ReactNativePic, altText: "React Native" },
    { image: gitPic, altText: "Git" },
    { image: githubPic, altText: "Github" },
    { image: firebasePic, altText: "Google Firebase" },
    { image: SolidPic, altText: "Principios S.O.L.I.D" }
    
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar solo un ítem a la vez (Frontend o Backend)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true
  };

  return (
    <>
    <div className="container">
      <TitleSection title={isEnglish ? 'Skills' : 'Habilidades'} />
      <Slider {...settings} className="skills-slider">
        <div>
          <SkillSection title="Frontend" skills={frontendSkills} />
        </div>
        <div>
          <SkillSection title="Backend" skills={backendSkills} />
        </div>
        <div>
          <SkillSection title={isEnglish ? 'Database' : 'Base de datos'} skills={baseDeDatos}/>
        </div>
        <div>
          <SkillSection title="Extras" skills={extras}/>
        </div>
      </Slider>
    </div>
    </>
  );
}

export default Skills;
