import React, { useState } from 'react'
import * as Icon from 'react-feather'
import FsLightbox from 'fslightbox-react'

const Portfolio = props => {
  const [toggler, setToggler] = useState(false)
  const { title, subtitle, imageUrl, largeImageUrl, url } = props.content

  const handleToggler = value => {
    setToggler(value)
  }

  const GopuffVideo = () => (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube-nocookie.com/embed/ruyr2Y4NWkk"
      title="What is Gopuff?"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  )

  return (
    <div
      className={
        props.isVisible ? 'mi-portfolio mi-portfolio-visible' : 'mi-portfolio'
      }
    >
      <div className="mi-portfolio-image">
        {!imageUrl ? (
          <div style={{ height: '254px' }}>
            <GopuffVideo />
          </div>
        ) : (
          <img src={imageUrl} alt={title} />
        )}
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6 dangerouslySetInnerHTML={{ __html: subtitle }} /> : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  )
}

export default Portfolio
