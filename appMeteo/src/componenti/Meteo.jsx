import React, { useEffect, useState } from "react";

function Meteo() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  const API_KEY = "8b067dd63f37fde73cf08d5c39ada681";

  // function get temp data che prende dati dall API meteo

  const getTempData = (api, query) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.main);
        setCity(query);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // chiamo la funzione per cercare la città e il meteo a ogni input dato
  useEffect(() => {
    getTempData(API_KEY, inputValue);
  }, [inputValue]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs text-center shadow-lg ">
          <input
            className="m-3 rounded-pill text-center"
            type="text"
            placeholder="Scrivi la città"
            value={inputValue}
            onInput={(e) => setInputValue(e.target.value)}
          />

          {!inputValue.length ? null : data ? (
            <div>
              <p>Il meteo di oggi a {city}: </p>

              <div className="shadow-lg m-2 p-3">
                <img className="weather-icon" src="" alt=""></img>

                <p>Temperatura attuale: {data.temp} °C</p>
                <p>
                  Temperatura media : {data.temp_min} °C a {data.temp_max} °C
                </p>
                <p>Umidità : {data.humidity} %</p>
              </div>
            </div>
          ) : (
            <p>Digita una città valida</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Meteo;
