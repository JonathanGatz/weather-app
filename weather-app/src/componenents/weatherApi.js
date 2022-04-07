import React, { Component } from "react";

function WeatherApi() {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=Chicago,IL,USA&limit=5&appid=8e268413eff89ab0dc08d52deb78a307
   `;

  return (
    <div className="weatherapi">
      <div className="container"> </div>
      <div className="top">
        <div className="locaion">
          <p>Chicago</p>
        </div>

        <div className="temp">
          <h1>60 ℉</h1>
        </div>

        <div className="discription">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom">
          <div className="feels"></div>
          <p>65%</p>
           </div>
           <div className="humidity">
               <p>20%</p>
           </div>
           <div className="wind">
               <p>12 MPH</p>
           </div>
    </div>

  );
}

export default WeatherApi;
