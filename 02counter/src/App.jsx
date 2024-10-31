import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount] = useState(0);

  function addVal(){
    setCount(count+1);
  }
  function removeVal(){
    setCount(count-1);
  }




  return (
    <>
      <h1>Shaill's Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={addVal}>Increase {count}</button> {/* here we have passed the reference of the function */}
      <br />
      <button onClick={removeVal}>Dncrease {count}</button> {/* we can also execute the function here itself*/}
      
    </>
  )
}

export default App
