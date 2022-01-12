import "./App.css";
import { Hero, Intro } from "./components";

import DP from "./data/data";

function App() {
  return (
    <div className="App">
      <Hero {...DP.hero} />

      <Intro {...DP.intro} />
    </div>
  );
}

export default App;
