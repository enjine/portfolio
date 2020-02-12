import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import FsLightbox from 'fslightbox-react'
// import * as Icon from 'react-feather'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Service from '../components/Service'

/*
<span className="mi-about-image-icon">
  <Icon.ZoomIn />
</span>
<FsLightbox
  toggler={toggler}
  sources={[information.aboutImageLg]}
/>
*/

const About = () => {
  const [toggler, setToggler] = useState(false)
  const [information, setInformation] = useState('')
  const [services, setServices] = useState([])

  const handleToggler = value => {
    setToggler(value)
  }

  useEffect(() => {
    axios.get('/api/information').then(response => {
      setInformation(response.data)
    })
    axios.get('/api/services').then(response => {
      setServices(response.data)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Who I Am" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="cover letter"
                  onClick={() => handleToggler(!toggler)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  <span className="color-theme">
                    {information.firstName} {information.lastName}
                  </span>
                </h3>
                <ul>
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Location</b> {information.address}
                    </li>
                  )}
                </ul>
                <p>I solve problems and work well with others.</p>
                <p>
                  I communicate clearly and am excellent at translating the
                  non-technical to technical and vice-versa.
                </p>
                <p>I bring people together.</p>
                <p>
                  I enjoy challenging work, listening to (and playing) music,
                  and riding motorcycles on sunny days.
                </p>

                <a
                  href={information.cvfile}
                  className="mi-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="What I Do" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
