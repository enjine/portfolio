import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sectiontitle from '../components/Sectiontitle'
import Smalltitle from '../components/Smalltitle'
import Layout from '../components/Layout'
import Resume from '../components/Resume'
import ButtonLink from '../components/ButtonLink'

const Resumes = () => {
  const [workingExperience, setWorkingExperience] = useState([])
  const [educationExperience, setEducationExperience] = useState([])
  const [volunteerExperience, setVolunteerExperience] = useState([])
  const [information, setInformation] = useState('')

  useEffect(() => {
    axios.get('/api/information').then(({ data }) => {
      setInformation(data)
    })
    axios
      .get('/api/experience')
      .then(
        ({
          data: { workingExperience, educationExperience, volunteerExperience }
        }) => {
          setWorkingExperience(workingExperience)
          setEducationExperience(educationExperience)
          setVolunteerExperience(volunteerExperience)
        }
      )
  }, [])

  return (
    <Layout>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Timeline" />
          <Smalltitle title="Work Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Volunteer Experience" icon="certificate" />
          <div className="mi-resume-wrapper">
            {volunteerExperience.map(volunteerExp => (
              <Resume key={volunteerExp.id} resumeData={volunteerExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Education" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <div className="text-right">
            <ButtonLink
              url={information.cvfile}
              target="_blank"
              className="mr-2"
            >
              Download Resumè
            </ButtonLink>
            <ButtonLink className="" url={information.calendar} target="_blank">
              Calendar
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resumes
