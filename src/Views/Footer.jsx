import React from 'react'
import locales from '../language/locales.json'


import { CiLinkedin } from 'react-icons/ci'

function Footer({isEnglish}) {
  return (
    <>
        <footer className="footer mt-5 d-flex justify-content-around align-items-center fade-in flex-wrap" id={isEnglish ? locales.en.menu[4] : locales.es.menu[4]}>
            <div className="contact-me text-center">
                <h4>{isEnglish ? locales.en.footer.title : locales.es.footer.title}</h4>
                <p>{isEnglish ? locales.en.footer.subtitle : locales.es.footer.subtitle}</p>
                <a href='mailto:cdavidrigoberto@gmail.com' className='emailDirection'>
                    <h4>cdavidrigoberto@gmail.com</h4>
                </a>
            </div>
            <div className="other-media">
                <p>{isEnglish ? locales.en.footer.social : locales.es.footer.social}</p>
                <div className="linkedin-icon">
                    <a href='https://www.linkedin.com/in/cdavidrigoberto/' target='_blank' rel='noopener noreferrer'>
                        <CiLinkedin color='blue' size={'32'}/>
                    </a>

                </div>
            </div>

            <p>{isEnglish ? locales.en.footer.copyright : locales.es.footer.copyright} &copy; {new Date().getFullYear()}</p>
        </footer>
    
    </>
  )
}

export default Footer