import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Service from '../components/Service'
import TrackVisibility from 'react-on-screen'
import Progress from '../components/Progress'
import ButtonLink from '../components/ButtonLink'

const About = () => {
  const [skills, setSkills] = useState([])
  const [totalYearsExperience, setTotalYearsExperience] = useState(0)
  const [toggler, setToggler] = useState(false)
  const [information, setInformation] = useState('')
  const [services, setServices] = useState([])

  const handleToggler = value => {
    setToggler(value)
  }

  useEffect(() => {
    axios.get('/api/skills').then(response => {
      setSkills(response.data)
    })
    axios.get('/api/experience').then(response => {
      setTotalYearsExperience(response.data.totalYears)
    })
    axios.get('/api/information').then(response => {
      setInformation(response.data)
    })
    axios.get('/api/services').then(response => {
      setServices(response.data)
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
                <p>
                  I am intensely focused on producing high-quality products that
                  deliver an exceptional customer experience.
                </p>
                <p>I bring people together, and practice empathy.</p>
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

                <ButtonLink url={information.cvfile} target="_blank">
                  Download Resumè
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
      <div className="mi-skills-area mi-section mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Core Competencies" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map(skill => (
                <TrackVisibility
                  once
                  className="col-lg-6 mt-30"
                  key={skill.title}
                >
                  <Progress
                    title={skill.title}
                    percentage={
                      skill.value || (skill.years / totalYearsExperience) * 100
                    }
                    years={skill.years}
                  />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
