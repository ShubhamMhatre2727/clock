import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  
  function updateClock(){
    setCount(count + 1);

    requestAnimationFrame(updateClock);
  }

  useEffect(()=> updateClock(),[])

  return (
    <main>
    <h1>Hello World ({count})</h1>
    </main>
  )
}

export default App
