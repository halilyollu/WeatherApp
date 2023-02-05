import React, {useState} from 'react';
import WeatherIcons from './components/WeatherIcons';
import axios from 'axios';
import {WiSmallCraftAdvisory} from 'weather-icons-react';

function App() {

	const [data, setData] = useState({});
	const [location, setLocation] = useState('');

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4f6039cc811ddd7338e95b3093e6cccc`;

	const searchLocation = (e) => {
		if(e.key === 'Enter'){
			axios.get(url)
			.then((res) => {
				setData(res.data);
				setLocation('');
			})
		}
	}

  return (
   <div className="app">
	<div className="search">
		<input
			value={location}
			onChange={e => setLocation(e.target.value)}
			onKeyPress={searchLocation}
			type="text"
			placeholder="Şehir Giriniz"
		></input>
	</div>
	<div className="container">
			<div className="top">
				<div className="location">
					<p>{data.name}</p>
				</div>
				<div className="temp">
					{data.main ? <h1>{Math.round(data.main.temp - 273,15)} °C</h1> : null}
				</div>
				{data.weather ? <WeatherIcons props={data.weather[0].main.toString()}/> : null}
			</div>
			<div className="bottom">
				<div className="feels">
					{data.main ? <p className='bold'>{Math.round(data.main.feels_like - 273,15)} °C</p> : null}
					<p>Hissedilen</p>
				</div>
				<div className="humidity">
					{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
					<p>Nem</p>
				</div>
				<div className="wind">
					{data.wind ? <p className='bold'>{Math.round(data.wind.speed * 1.609344)} km/s</p> : null}
					<WiSmallCraftAdvisory size={30} color='#fff' />
				</div>
			</div>
		</div>	
   </div>
  );
}

export default App;
