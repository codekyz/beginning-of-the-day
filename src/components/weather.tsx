import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherComponent = styled.div`
  height: 40vh;
  padding: 0 16px;
  grid-row: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
    font-size: 24px;
    font-weight: 800;
    padding-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
    text-transform: uppercase;
  }
`;

interface IPosition {
  coords: ICoords;
  timestamp: number;
}

interface ICoords {
  latitude: number;
  longitude: number;
  altitude: null | number;
  accuracy: number;
  altitudeAccuracy: null | number;
}

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOk, geoError);
  }, [lat, lon]);

  const API_KEY = "62b3e567d906a1b5db72f422643c9ff5";

  const apiCall = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const json = await (await fetch(url)).json();
    setCity(json.name);
    setWeather(json.weather[0].main);
    setTemp(json.main.temp);
  };

  const geoOk = (position: IPosition) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    if (lat !== 0 && lon !== 0) {
      apiCall(lat, lon);
    }
  };

  const geoError = () => {
    alert("Can't find you. no weather for you.");
  };

  return (
    <WeatherComponent>
      <p>{city}</p>
      <p>{weather}</p>
      <p>{temp}℃</p>
    </WeatherComponent>
  );
};

export default Weather;
