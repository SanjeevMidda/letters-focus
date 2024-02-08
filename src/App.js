import { useState } from "react";
import Letter from "./components/Letter";
import "./index.css";

function App() {
  const [location, setLocation] = useState(0);

  console.log(location);

  let styles = {
    top: location.pageY,
    left: location.pageX,
  };

  let letters = {
    letter1: false,
    letter2: false,
    letter3: false,
    letter4: false,
    letter5: false,
    letter6: false,
    letter7: false,
    letter8: false,
    letter9: false,
    letter10: false,
    letter11: false,
    letter12: false,
    letter13: false,
    letter14: false,
    letter15: false,
    letter16: false,
    letter17: false,
    letter18: false,
  };

  return (
    <div className="App" onClick={(e) => setLocation(e)}>
      pageX {location.pageX} <br />
      pageY {location.pageY}
      <div className="circle" style={styles}></div>
      <div className="letterContainer">
        <Letter letter="A" />
        <Letter letter="B" />
        <Letter letter="C" />
        <Letter letter="D" />
        <Letter letter="E" />
        <Letter letter="F" />
        <Letter letter="G" />
        <Letter letter="H" />
        <Letter letter="I" />
        <Letter letter="J" />
        <Letter letter="K" />
        <Letter letter="L" />
        <Letter letter="M" />
        <Letter letter="N" />
        <Letter letter="O" />
        <Letter letter="P" />
        <Letter letter="Q" />
        <Letter letter="R" />
      </div>
    </div>
  );
}

export default App;
