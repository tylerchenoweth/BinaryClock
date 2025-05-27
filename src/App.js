import { useRef, useEffect, useState } from "react";

import './App.css'
import Unit from './components/Unit/Unit.js'
import TimeColumn from './components/TimeColumn/TimeColumn.js'
import {getBinary} from './utils/getBinary.js'


function App() {
  const [time, setTime] = useState(new Date());
  const binary_time = getBinary(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="App">

      {/* 
        If you uncomment below remember to adjust the css
        Instructions are in the App.css
      */}

      {/* <h1>My binary clock</h1>
      
      <div>
        {time.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
        })}
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      <div className="clock-outer-container">
        <div className="clock-inner-container">
          {/* Hour tens */}
          <TimeColumn key="hour_tens" numUnits={2} binary={binary_time.get("hour_tens")} />
          {/* Hour units */}
          <TimeColumn key="hour_units" numUnits={4} binary={binary_time.get("hour_units")} />
        </div>

        <div className="clock-inner-container">
          {/* Minute tens */}
          <TimeColumn key="minute_tens" numUnits={3} binary={binary_time.get("minute_tens")} />
          {/* Minute units */}
          <TimeColumn key="minute_units" numUnits={4} binary={binary_time.get("minute_units")} />
        </div>

        <div className="clock-inner-container">
          {/* Second tens */}
          <TimeColumn key="second_tens" numUnits={3} binary={binary_time.get("second_tens")} />
          {/* Second units */}
          <TimeColumn key="second_units" numUnits={4} binary={binary_time.get("second_units")} />
        </div>
      </div>
    </div>
  );
}


export default App;