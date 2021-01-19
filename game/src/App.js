import React, { useEffect, useState } from "react";
import song from "./peanutbutter.mp3";
import { FcSpeaker } from "react-icons/fc";

export default function App() {
  const [char, setChar] = useState({
    blockFirst: "",
    blockSecond: "",
  });
  const [level, setLevel] = useState(0);
  const playAgain = () => {
    setChar({ ...char, blockFirst: "", blockSecond: "" });
    setLevel(0);
  };

  const clickedOnVictim = () => {
    setChar({ ...char, blockFirst: "none", blockSecond: "none" });
    setLevel(0);
  };
  const randomVillianSize = [
    "390px",
    "330px",
    "270px",
    "210",
    "150px",
    "90px",
    "30px",
  ];
  const clickedOnVillian = () => {
    setLevel(level + 1);
  };

  useEffect(() => {
    if (char.blockSecond === "none") {
      setChar({ ...char, blockFirst: "none", blockSecond: "none" });
    }
  }, []);

  return (
    <div className="app">
      {level === 7 ? (
        <h1
          style={{ color: "white", position: "relative", marginBottom: "20px" }}
        >
          Turn your speakers{" "}
          <FcSpeaker
            style={{ fontSize: "3rem", position: "relative", top: "10px" }}
          />{" "}
          On 😁
        </h1>
      ) : (
        ""
      )}
      {level < 7 ? (
        <p
          style={{
            color: "white",
            width: "50%",
            textAlign: "center",
            fontSize: "1.3rem",
          }}
        >
          HELP! BATMAN HAS LOST HIS MIND. CLICK ON HIM TO MAKE HIM SMALLER, BEAT
          LEVEL{" "}
          <span
            style={{
              fontSize: "1.6rem",
              background: "red",
              padding: "0px 10px",
              borderRadius: "50px",
              color: "white",
            }}
          >
            6
          </span>{" "}
          TO MAKE HIM GO AWAY AND IN THE END YOU WILL BE REWARDED WITH A DANCE
          AND A SONG!
        </p>
      ) : (
        ""
      )}
      {level < 7 ? (
        <h1 style={{ color: "white", marginTop: "20px" }}>Level: {level}</h1>
      ) : (
        ""
      )}
      <div className="game">
        {char.blockSecond === "none" ? (
          <div className="game-over" style={{ background: "grey" }}>
            <h2>Oh No! You clicked on the victim!</h2>
            <h2>G.A.M.E O.V.E.R</h2>
            <button style={{ cursor: "pointer" }} onClick={() => playAgain()}>
              Play Again!
            </button>
          </div>
        ) : (
          ""
        )}

        {level < 7 ? (
          <img
            src="https://s2.gifyu.com/images/ezgif-1-43d851f286c4.gif"
            className="villian"
            alt="batman with explosive"
            style={{
              display: `${char.blockFirst}`,
              width: `${randomVillianSize[level]}`,
            }}
            onClick={() => clickedOnVillian()}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-270px",
            }}
          >
            <img
              src="https://hrl.uncg.edu/wp-content/uploads/boom.png"
              alt="boom logo"
              className="boom"
            />{" "}
            <audio autoPlay>
              <source
                src="https://www.fesliyanstudios.com/play-mp3/6966"
                type="audio/mp3"
              />
            </audio>
            <button style={{ cursor: "pointer" }} onClick={() => playAgain()}>
              Play Again
            </button>
          </div>
        )}
        {level < 7 ? (
          <img
            src="https://media4.giphy.com/media/25OC7fR4bg6lvxGrjI/giphy.gif"
            alt="victim running"
            className="victim"
            style={{
              display: `${char.blockSecond}`,
            }}
            onClick={() => clickedOnVictim()}
          />
        ) : (
          <div>
            <div className="mission-completed-heading">
              <h1
                style={{
                  background: "black",
                  color: "white",
                  padding: "5px",
                  margin: "20px",
                  textAlign: "center",
                }}
              >
                Mission Completed!
              </h1>
              <img
                src="https://i.pinimg.com/originals/57/e2/09/57e209296e586933febadf06e271a3d3.gif"
                alt="figure-dancing"
                className="figure"
              />
            </div>
            <div
              className="mission-completed"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://media0.giphy.com/media/xUOwGbVaQ7QN361yCc/source.gif"
                alt="running pug"
                className="dog1"
              />
              <img
                src="https://media.tenor.com/images/dcc0941f40c6cdb2d7006b44500d2335/tenor.gif"
                alt="running pug"
                className="dog2"
              />
              <img
                src="https://thumbs.gfycat.com/CoolHideousChuckwalla-max-1mb.gif"
                alt="dancing banana"
                className="banana"
              />
              <img
                src="https://i.gifer.com/4hsd.gif"
                alt="dancing zombie"
                className="zombie"
              />
              <img
                src="https://thumbs.gfycat.com/DenseReadyHairstreak-max-1mb.gif"
                alt="dancing zombie"
                className="girl-dancing"
              />
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/19947f4e-cda7-4d8c-a9de-bd3f68ac3aa1/d8wp0wl-de112751-ae24-44e9-9f56-602ecc8b5e7d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTk5NDdmNGUtY2RhNy00ZDhjLWE5ZGUtYmQzZjY4YWMzYWExXC9kOHdwMHdsLWRlMTEyNzUxLWFlMjQtNDRlOS05ZjU2LTYwMmVjYzhiNWU3ZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xVSc0rFC2IOTijlgzB4riNvBtCwzXiuqn_Igjj6bYF4"
                alt="guy dancing"
                className="guy-dancing"
              />
              <audio autoPlay>
                <source src={song} type="audio/mp3" />
              </audio>
            </div>
          </div>
        )}
        {level === 6 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <h1 style={{ background: "blue", padding: "10px", color: "white" }}>
              WARNING: THIS IS THE HARDEST LEVEL
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
