import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData]= useState({})
  const [location, setLocation] = useState('')
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_APIKEY}`
    
  const handlesearch=(event)=>
     {if(event.key === 'Enter')
    
   { fetch(url)
    .then(res=> res.json())
    .then(data=> setData(data))
    setLocation('')
  }

  }
  return (
    <div >
      <input type="text" name="location" id="" placeholder='location'
      value={location} 
      onChange={event => setLocation(event.target.value)}
      onKeyPress={handlesearch}
      />
      <div>
       <p> {data?.main?.temp}</p>
      </div>
    </div>
  );
}

export default App;
