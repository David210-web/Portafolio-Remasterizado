import React from 'react';

function SkillSection({ title, skills }) {
  return (
    <div className="skill-section">
      <h3 className='skills_title'>{title}</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="img_container">
            <img src={skill.image} alt={skill.altText} />
            <p>{skill.altText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
