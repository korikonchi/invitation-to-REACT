import React from 'react'
import { Hero, Intro, CountDown } from './components'
import DP from './data/data'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero {...DP.hero} />
      <Intro {...DP.intro} />
      <CountDown {...DP.countDown} />
    </div>
  )
}

export default App
