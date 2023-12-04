import { useState } from "react";
import emotionalData from "./LineChart/emotionLineData";
import { options } from "./LineChart/emotionLineData";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeadShot from "./assets/missionary.jpg";
import LeaderView from "./LeaderView";
import { Link } from "react-router-dom";

function App() {
  const [selectedOption, setSelectedOption] = useState("missionary");

  return (
    <>
      <div
        className="title"
        style={{ position: "absolute", top: "20px", left: "20px" }}
      >
        <h3>Missionary Mental Health</h3>
      </div>

      <div className="dropdown-container">
        <select
          className="dropdown"
          style={{ margin: "20px" }}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="missionary">Missionary</option>
          <option value="mission_leader">Mission Leader</option>
        </select>
      </div>

      {selectedOption === "missionary" ? (
        //Missionary View
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "500px",
            }}
          >
            <div>
              <img
                src={HeadShot}
                alt="Missionary Headshot"
                style={{ width: "atuo", height: "75%", marginRight: "35px" }}
              />
              <br></br>
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "35px",
                }}
              >
                <Link type="button" className="btn btn-outline-dark btn-sm" to="/survey">
                  Take Daily Survey
                </Link>
              </div>
            </div>
            <div style={{ width: "100%", height: "70%", textAlign: "center" }}>
              <Line data={emotionalData} options={options} />
            </div>
          </div>
          <br></br>
          <h2>Personalized Resources</h2>
        </>
      ) : (
        //Mission Leader View
        <LeaderView />
      )}
    </>
  );
}

export default App;
