import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Socialicons from '../components/Socialicons'
import Layout from '../components/Layout'
import ParticleConfigurator from '../components/ParticleContainer'
import particleConfigs from '../data/particle-configs'

const Home = () => {
  const [information, setInformation] = useState('')

  useEffect(() => {
    axios.get('/api/information').then(({ data }) => {
      setInformation(data)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <ParticleConfigurator config={particleConfigs} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  <span className="color-theme">
                    {information.firstName} <br /> {information.lastName}
                  </span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
