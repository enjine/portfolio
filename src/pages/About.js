import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Service from '../components/Service'
import ButtonLink from '../components/ButtonLink'
import SafeMailToLink from '../components/SafeMailToLink'

const About = () => {
  const [toggler, setToggler] = useState(false)
  const [information, setInformation] = useState('')
  const [services, setServices] = useState([])

  const handleToggler = value => {
    setToggler(value)
  }

  useEffect(() => {
    axios.get('/api/information').then(({ data }) => {
      setInformation(data)
    })
    axios.get('/api/services').then(({ data }) => {
      setServices(data)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Who I Am" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="&copy; 2016 Luke Hughes (used with permission)"
                  onClick={() => handleToggler(!toggler)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  <span className="color-theme">
                    {information.firstName} <br /> {information.lastName}
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
                      <b>Email</b>{' '}
                      <SafeMailToLink>{information.email}</SafeMailToLink>
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Location</b> {information.address}
                    </li>
                  )}
                </ul>
                <p>
                  I am intensely focused on producing high-quality products that
                  deliver an exceptional customer experience.
                </p>
                <p>
                  I bring people together, embracing diversity, and practicing
                  empathy.
                </p>
                <p>
                  I lead technical teams toward well-architected solutions that
                  work within the timeline and adapt well to changes along the
                  way.
                </p>
                <p>
                  I listen well, communicate clearly, and am excellent at
                  facilitating cross-functional collaboration.
                </p>
                <p>
                  I understand the myriad relationships between technology,
                  business, branding, marketing, products, and humans.
                </p>
                <p>
                  I strive for growth and empower those with whom I interact to
                  do the same.
                </p>
              </div>
              <div className="mt-2 text-center">
                <ButtonLink
                  className="mr-2"
                  url={information.cvfile}
                  target="_blank"
                >
                  Resumè
                </ButtonLink>
                <ButtonLink
                  className="mr-2 mt-n2"
                  url={information.techSheet}
                  target="_blank"
                >
                  Tech Sheet
                </ButtonLink>
                <ButtonLink
                  className=""
                  url={information.calendar}
                  target="_blank"
                >
                  Calendar
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-bottom">
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
