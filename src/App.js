import React from 'react'
import {
  Hero,
  Intro,
  CountDown,
  AboutUs,
  Collage,
  CardLocation,
} from './components'
import DP from './data/data'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero {...DP.hero} />
      <Intro {...DP.intro} />
      <CountDown {...DP.countDown} />
      <AboutUs {...DP} />
      <Collage {...DP.collage} />
      <CardLocation {...DP.cardLocation} />
    </div>
  )
}

export default App
