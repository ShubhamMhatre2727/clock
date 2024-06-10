import { useState, useEffect } from 'react'
import './App.css'
import Clock from './Clock';
import SecondBits from './Bits';

function App() {
  const width = 200;
  const height = 200;
  
  return (
      <main><Clock width={width} height={height}/>
      <SecondBits width={width} height={height}/></main>
  )
}

export default App
