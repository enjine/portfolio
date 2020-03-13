import React from 'react'
export const ButtonLink = props => (
  <a
    href={props.url}
    className={`mi-button ${props.className}`}
    target={props.target}
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

export default ButtonLink
