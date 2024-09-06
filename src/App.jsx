import React, { useState } from 'react'
import './App.css'
import './mediaquerys.css'
import './Animations.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './Views/Header'
import Main from './Views/Main'
import Footer from './Views/Footer';

function App() {
  const [isEnglish,setIsEnglish] = useState(true)

  const toggleLanguage = () => {
    setIsEnglish(prev => !prev)
  }
  return (
    <>
     <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage}/>
     <Main isEnglish={isEnglish}/>
     <Footer isEnglish={isEnglish}/>
    </>
  )
}

export default App