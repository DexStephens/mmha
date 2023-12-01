import { useState } from "react";
import emotionalData from "./LineChart/emotionLineData";
import { options } from "./LineChart/emotionLineData";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import HeadShot from "./assets/missionary.jpg";
import missionHealth from "./LineChart/missionHealth";
import elderNelsonPhoto from "./assets/elder_nelson.jpg";
import sisterHansonPhoto from "./assets/sister_hanson.jpg";
import elderWrightPhoto from "./assets/elder_wright.jpg";
import elderAndersonPhoto from "./assets/elder_anderson.jpg";
import sisterFelstedPhoto from "./assets/sister_felsted.jpg";



function LeaderView () {
return (
<>
<div
className="title"
style={{ position: "absolute", top: "20px", left: "20px" }}
>
<h3>Missionary Mental Health</h3>
</div>
<h1 style={{ textAlign: "center", fontSize: "40pt", marginTop: "40px" }}>Leader View</h1>
<div>


</div>
<div
            style={{
              display: "flex",
              alignItems: "center",
              height: "500px",
            }}
          >
            <div>
            <table>
                <caption>Struggling Missionaries</caption>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={elderNelsonPhoto} alt="Elder Nelson" style={{borderRadius: "50%", width: "50px", height: "50px"}}/></td>
                        <td>Elder Nelson</td>
                        <td style={{color: "red"}}>-8</td>
                    </tr>
                    <tr>
                        <td><img src={sisterHansonPhoto} alt="Sister Hanson" style={{borderRadius: "50%", width: "50px", height: "50px"}}/></td>
                        <td>Sister Hanson</td>
                        <td style={{color: "red"}}>-8</td>
                    </tr>
                    <tr>
                        <td><img src={elderWrightPhoto} alt="Elder Wright" style={{borderRadius: "50%", width: "50px", height: "50px"}}/></td>
                        <td>Elder Wright</td>
                        <td style={{color: "red"}}>-5</td>
                    </tr>
                    <tr>
                        <td><img src={elderAndersonPhoto} alt="Elder Anderson" style={{borderRadius: "50%", width: "50px", height: "50px"}}/></td>
                        <td>Elder Anderson</td>
                        <td style={{color: "rgb(252, 209, 42)"}}>-3</td>
                    </tr>
                    <tr>
                        <td><img src={sisterFelstedPhoto} alt="Sister Felsted" style={{borderRadius: "50%", width: "50px", height: "50px"}}/></td>
                        <td>Sister Felsted</td>
                        <td style={{color: "rgb(252, 209, 42)"}}>-2</td>
                    </tr>
                </tbody>
            </table>
              <br></br>
              <br></br>
              <div>
                <button type="button" className="btn btn-outline-dark btn-sm">
                  Mission Mental Health
                </button>
                <button type="button" className="btn btn-outline-dark btn-sm">
                  Mental Health by Zone
                </button>
                <button type="button" className="btn btn-outline-dark btn-sm">
                  Mental Health by District
                </button>
              </div>
            </div>
            <div style={{ width: "100%", height: "70%", textAlign: "center" }}>
              <Line data={missionHealth} options={options} />
            </div>
          </div>
          <br></br>
</>
)
}

export default LeaderView;

