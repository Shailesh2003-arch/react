import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
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
      <h1 className='bg-green-400 text-black p-2 rounded-xl'>Shaill's Counter App</h1>
      <h2 className='m-2'>Counter: {count}</h2>
      <button className= "m-2" onClick={addVal}>Increase {count}</button> {/* here we have passed the reference of the function */}
      <br />
      <button className= "m-2" onClick={removeVal}>Decrease {count}</button> {/* we can also execute the function here itself*/}
      <br />
      <Card/>
      <Card channel="chai aur code"/ >
    </>
  )
}

export default App
