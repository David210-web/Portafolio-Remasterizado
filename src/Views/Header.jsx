import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import locales from '../language/locales.json'


function Header({isEnglish,toggleLanguage}) {
  return (
    <>
    <header>
        <Menu isEnglish={isEnglish} toggleLanguage={toggleLanguage} translation={locales}/>
        <Banner isEnglish={isEnglish} translation={locales}/>
    </header>
    </>
  )
}

export default Header