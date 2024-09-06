import React from 'react'

function Card({ title,description,linkText,img,isEnglish }) {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linkText} className='card-button'>{isEnglish ? 'Go code' : 'Ir al codigo'}</a>
    </div>
  )
}

export default Card