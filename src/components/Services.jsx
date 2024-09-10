import React, { useEffect, useState } from "react";
import TitleSection from "./TitleSection";

function Services({isEnglish,translation}) {
  const [selectionService, setSelectionService] = useState('backend');
  const [showDescription,setShowDescription] = useState(false)

  useEffect(() =>{
    setShowDescription(false)
    const timer = setTimeout(() =>{
        setShowDescription(true)
    },200)
    return () => clearTimeout(timer)
  },[selectionService])

 

  return (
    <>
      <div className="services_container mt-2" id={isEnglish ? translation.en.menu[1] : translation.es.menu[1]}>
      <TitleSection title={isEnglish ? translation.en.menu[1] : translation.es.menu[1]} />
        <div className="items-selector mt-2">
          <div className="item" onClick={() => setSelectionService('backend')}>
            <h3>Backend</h3>
          </div>
          <div className="item" onClick={() => setSelectionService('frontend')}>
            <h3>Frontend</h3>
          </div>
          <div className="item" onClick={() => setSelectionService('database')}>
            <h3>{isEnglish ? 'Database' : 'Base de datos'}</h3>
          </div>
          <div className="item" onClick={() => setSelectionService('refactor')}>
            <h3>{isEnglish ? 'Refactorization' : 'Refactorizacion'}</h3>
          </div>
        </div>

        <article className={`services-description mt-4 ${showDescription ? 'show' : ''}`}>
          <p>{isEnglish ? translation.en.services[selectionService] : translation.es.services[selectionService]}</p>
        </article>
      </div>
    </>
  );
}

export default Services;
