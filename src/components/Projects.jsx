import React from "react";
import TitleSection from "./TitleSection";
import Card from "./Card";

import ApiImg from '../assets/apiRestLogo.png'
import NetCorePic from '../assets/netcore.png';
import ReactNativePic from '../assets/react.png';
import githubPic from '../assets/GitHub.png';

function Projects({isEnglish,translation}) {
  return (
    <div id={isEnglish ? translation.en.menu[3] : translation.es.menu[3]}>
      <TitleSection title={isEnglish ? translation.en.menu[3] : translation.es.menu[3]} />
      <div className="projects-container">
        <Card isEnglish={isEnglish}
          title={isEnglish ? translation.en.projects.project1.title : translation.es.projects.project1.title}
          description={isEnglish ? translation.en.projects.project1.description : translation.es.projects.project1.description}
            linkText={'https://github.com/David210-web/JwtApi.git'}
            img={ApiImg}
        />
        <Card isEnglish={isEnglish}
          title={isEnglish ? translation.en.projects.project2.title : translation.es.projects.project2.title}
          description={isEnglish ? translation.en.projects.project2.description : translation.es.projects.project2.description}
            linkText={'https://github.com/David210-web/Api_rest_jwt.git'}
            img={ApiImg}
        />
        <Card isEnglish={isEnglish}
          title={isEnglish ? translation.en.projects.project3.title : translation.es.projects.project3.title}
          description={isEnglish ? translation.en.projects.project3.description : translation.es.projects.project3.description}
            linkText={'https://github.com/David210-web/React_Native_app.git'}
            img={ReactNativePic}
        />
        <Card isEnglish={isEnglish}
          title={isEnglish ? translation.en.projects.project4.title : translation.es.projects.project4.title}
          description={isEnglish ? translation.en.projects.project4.description : translation.es.projects.project4.description}
            linkText={'https://github.com/David210-web/Sistema-gestor-de-notas.git'}
            img={NetCorePic}
        />
        
          <div></div>
        
        <Card isEnglish={isEnglish}
          title={isEnglish ? 'See more projects in my github account' : 'Ver mas proyectos en mi cuenta de github'}
          description=""
            linkText={'https://github.com/David210-web'}
            img={githubPic}
        />
      </div>
      
    </div>
  );
}

export default Projects;
