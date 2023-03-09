import React,{useState} from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9cc688faadc7eb35468e9540cc9056de`;
const searchLocation = (event) =>
{
  if(event.key === 'Enter')
  {
    axios.get(url).then((response) =>
    {
      setData( response.data );
      console.log( response.data );
    })
    setLocation('');
  }
 
}

  return (
    <div className="app">
      <div className="search">
      <input 
      type="text"
      
      value={location}
      onChange = {event => setLocation(event.target.value)}
      onKeyPress = {searchLocation}
      placeholder = "Enter Your Location" 
      />
      </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
           {data.main? <h1>{data.main.temp.toFixed()}<sup>o</sup>F</h1> : null }
            </div>
            <div className="description">
           {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name !==undefined && 
          <div className="bottom">
            <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed(1)}<sup>o</sup>F</p>:'feels_like'}
              <p>feels Like</p>
            </div>
            <div className="humidity">
              {data.main? <p>{data.main.humidity}</p> : 'number'}
              <p>humidity</p>
            </div>
            <div className="wind">
             {data.wind ? <p>{ data.wind.speed.toFixed(1)} MPH</p>:'MPH'}
              <p>Wind Speed</p>
            </div>
          </div>  }
        </div>
    </div>
  );
}

export default App;
