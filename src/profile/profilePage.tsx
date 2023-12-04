import HeadShot from "../assets/missionary.jpg";
import emotionalData from "../LineChart/emotionLineData";
import { options } from "../LineChart/emotionLineData";
import { Line } from "react-chartjs-2";
import StressAnxiety from "../personalizedResources/stressAnxiety";
import SadnessDepression from "../personalizedResources/sadnessDepression";
import WaysToConnect from "../personalizedResources/waysToConnect";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
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
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <StressAnxiety />
        </div>
        <div style={{ width: "50%" }}>
          <SadnessDepression />
        </div>
      </div>
      <div>
        <WaysToConnect />
      </div>
    </>
  );
}

export default ProfilePage;
