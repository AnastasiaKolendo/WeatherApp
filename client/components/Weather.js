import React,{ useState, useEffect } from "react";

export default (props) => {
  const [apiData, setApiData] = useState({});
  const [apiLocation, setApiLocation] = useState([]);
  const [temp, setTepm] = useState([]);
  const apiKey = '4ae5aee19dd9b34ccc3625fa924a44ce';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${props.position.lat}&lon=${props.position.lng}&units=imperial&appid=${apiKey}`;
  const location = `http://api.openweathermap.org/geo/1.0/reverse?lat=${props.position.lat}&lon=${props.position.lng}&units=imperial&limit=1&appid=${apiKey}`
  const oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.position.lat}&lon=${props.position.lng}&units=imperial&limit=1&appid=${apiKey}`
  
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  useEffect(() => {
    fetch(location)
      .then((res) => res.json())
      .then((data) => setApiLocation(data));
  }, [location]);

  useEffect(() => {
    fetch(oneCall)
      .then((res) => res.json())
      .then((data) => setTepm(data));
  }, [oneCall]);

  useEffect(() =>{
    props.setTemp(temp.hourly)
  })

  return (
    <div>
      <header>
        <h2> The weather {(!apiLocation[0] || apiLocation.length === 0) ? '' : `in ${apiLocation[0].name}`}</h2>
      </header>
      <div>
        <div >
          {apiData.main ? (
            <div >
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
              />
              <p >
                {apiData.main.temp}&deg; F
              </p>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};
