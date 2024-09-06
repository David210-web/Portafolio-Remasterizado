import React from 'react'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import locales from '../language/locales.json'


function Main({isEnglish}) {
  return (
    <>
      <div class="container about fade-in text-center mt-4">
        <AboutMe isEnglish={isEnglish} translation={locales}/>
        <Services isEnglish={isEnglish} translation={locales}/>
        <Skills isEnglish={isEnglish}/>
        <Projects isEnglish={isEnglish} translation={locales}/>
        </div>
    </>
  )
}

export default Main