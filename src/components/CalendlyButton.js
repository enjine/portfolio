import React from 'react'

const open = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url:
        'https://calendly.com/dicandia?background_color=000000&text_color=FFFFFF&primary_color=efad39'
    })
  } else {
    console.warn('Calendly library not found!')
  }
  return false
}

export const CalendlyButton = props => (
  <button onClick={open} className={`${props.className || 'text-link'}`}>
    {props.children}
  </button>
)

export default CalendlyButton
