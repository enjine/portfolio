import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Particles from 'react-particles-js'
import Socialicons from '../components/Socialicons'
import Layout from '../components/Layout'
import particleConfigs from '../data/particle-configs'

const Home = () => {
  const [information, setInformation] = useState('')

  useEffect(() => {
    axios.get('/api/information').then(response => {
      setInformation(response.data)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles
          className="mi-home-particle"
          params={getConfig(particleConfigs)}
        />
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

const getConfig = configs =>
  shuffle(configs)[[Math.floor(Math.random() * configs.length)]]

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = array => {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export default Home
