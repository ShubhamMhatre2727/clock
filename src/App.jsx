import { useState, useEffect } from 'react'
import './App.css'
import Clock from './Clock';
import SecondBits from './SecondBits';

function App() {
  return (
      <main><Clock width="200px" height="200px" />
      <SecondBits width="200px" height="200px"/></main>
  )
}

export default App
