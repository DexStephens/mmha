import { useState } from "react";
import emotionalData from "./LineChart/emotionLineData";
import { options } from "./LineChart/emotionLineData";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function LeaderView () {
return (
<>
<div
className="title"
style={{ position: "absolute", top: "20px", left: "20px" }}
>
<h3>Missionary Mental Health</h3>
</div>
<h1>Leader View</h1>

</>
)
}

export default LeaderView;