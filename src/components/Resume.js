import React from 'react'

const Achievements = ({ items }) => (
  <ul className="mi-resume-achievements">
    {items.map(a => (
      <li>{a}</li>
    ))}
  </ul>
)

const Resume = props => {
  const {
    year,
    position,
    graduation,
    location,
    university,
    company,
    achievements,
    details
  } = props.resumeData
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">
          {company || university}{' '}
          <span className="mi-resume-location">{location}</span>
        </h6>
        <p>{details}</p>
        {achievements && <Achievements items={achievements} />}
      </div>
    </div>
  )
}

export default Resume
