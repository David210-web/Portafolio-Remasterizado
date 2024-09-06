import React from 'react'
import bgHeader from '../assets/bg-header.jpg'
import profilePic from '../assets/Perfil.jpg'


function Banner({isEnglish,translation}) {
  return (
    <div className='banner_container'>
        <img src={bgHeader} alt="" className='bg-header'/>
        <section className='text-container'>
            <h1 className='display-1 fade-in'>David Castillo</h1>
            <div className="line-container">
                <span className='top_line'></span>
                <h4 className='display-4 fade-in desplazamiento'>{isEnglish ? translation.en.subtitle : translation.es.subtitle}</h4>
                <span className='bottom_line'></span>
            </div>
            <button className='btn btn-primary mx-auto d-block'>
                {isEnglish ? "Download" : "Descargar"} CV
            </button>
        </section>
        <section className='profile_container'>
            <img src={profilePic} alt="" />
        </section>
    </div>
  )
}

export default Banner