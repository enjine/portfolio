import React from 'react'
import Particles from 'react-particles-js'

const ParticleConfigurator = ({ config }) => (
  <Particles className="mi-home-particle" params={getConfig(config)} />
)

const getConfig = configs =>
  shuffle(configs)[Math.floor(Math.random() * configs.length)]

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

export default ParticleConfigurator
