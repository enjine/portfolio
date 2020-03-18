import React from 'react'

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/string/rot13 [rev. #1]

const rot13Decode = string =>
  string.replace(/[a-zA-Z]/g, c =>
    String.fromCharCode(
      (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    )
  )

export const SafeMailToLink = props => (
  <a
    href={`mailto:${rot13Decode(props.children)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {rot13Decode(props.children)}
  </a>
)

export default SafeMailToLink
