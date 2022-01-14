import React from 'react'
import {
  Hero,
  Intro,
  CountDown,
  CardAbout,
  Collage,
  CardInvite,
  MessageArea,
} from './components'
import DP from './data/data'
import './App.css'

function App() {
  return (
    <div className="App">
      <section>
        <Hero {...DP.hero} />
      </section>
      <section>
        <Intro {...DP.intro} />
      </section>
      <section>
        <CountDown {...DP.countDown} />
      </section>
      <section>
        <CardAbout {...DP.groom} />
        <CardAbout {...DP.bride} />
        <CardAbout {...DP.us} />
      </section>
      <section>
        <Collage {...DP.collage} />
      </section>
      <MessageArea {...DP.messagearea} />
      <CardInvite {...DP.cardLocation} />
      {CardInvite(DP.giftTable)}
    </div>
  )
}

export default App
