import React from 'react'

const Sectiontitle = props => (
  <div className="mi-sectiontitle">
    {props.children}
    <h2>{props.title}</h2>
    <span>{props.title}</span>
  </div>
)

export default Sectiontitle
