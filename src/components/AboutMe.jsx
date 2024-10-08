import React from "react";
import TitleSection from "./TitleSection";
import curriculum from '../assets/Curriculum vitae.pdf'


function AboutMe({isEnglish,translation}) {
  return (
    <>
      <div class="container about fade-in text-center mt-4" id={isEnglish ? translation.en.menu[0] : translation.es.menu[0]}>
        <TitleSection title={isEnglish ? translation.en.menu[0] : translation.es.menu[0]} />
        <p className="text-lg-start mt-2">
          {isEnglish ? translation.en.about.part1 : translation.es.about.part1}
        </p>
        <p className="text-lg-end mt-2">
        {isEnglish ? translation.en.about.part2 : translation.es.about.part2}
        </p>
        <a href={curriculum} className='btn btn-primary'>
                {isEnglish ? "Download" : "Descargar"} CV
            </a>
      </div>
    </>
  );
}

export default AboutMe;
