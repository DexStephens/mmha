import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./profile/profilePage";

function App() {
  const [count, setCount] = useState(0);
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
          <ProfilePage />
        </>
      ) : (
        //Mission Leader View
        <div>
          <h1>This is the Mission Leader View</h1>
        </div>
      )}
    </>
  );
}

export default App;
