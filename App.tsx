import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Are you sure you want to do that?",
  "Le Hmph I see how it is",
  "Le sog don't talk to me",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://www.icegif.com/wp-content/uploads/milk-and-mocha-icegif-1.gif"
          />
          <div className="text">Yay! Love you Babe</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/enhk8n849CIAAAAi/milk-and-mocha-running-away.gif"
          />
          <div>Will you be my valentine?</div>
          <div className="">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
              }}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
