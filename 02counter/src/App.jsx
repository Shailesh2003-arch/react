import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount] = useState(0);


  return (
    <>
      <h1>Shaill's Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase {count}</button>
      <br />
      <button onClick={()=>setCount(count-1)}>Dncrease {count}</button>
      
    </>
  )
}

export default App
