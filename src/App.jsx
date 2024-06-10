import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState([0,0,0]);
  useEffect(() => {

      //Implementing the setInterval method
      const interval = setInterval(() => {
          const now = new Date();
          setCount([now.getHours(), now.getMinutes(), now.getSeconds()]);
          //setCount([3,30,0])
      }, 1000);


      //Clearing the interval

      return () => clearInterval(interval);

  }, [count]);

  return (
    <main>
    <p>{count[0]}:{count[1]}:{count[2]}</p>
        <p id="hour" style={{transform: `rotate(${count[0]*30 + count[1]*0.2 -90}deg)`}}></p>
        <p id="minute" style={{transform: `rotate(${count[1]*6 - 90}deg)`}}></p>
        <p id="second" style={{transform: `rotate(${count[2]*6 - 90}deg)`}}></p>
    </main>
  )
}

export default App
