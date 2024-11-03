import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("purple")

  return (
   <>
   <div className="w-full h-screen duration-100" style={{backgroundColor:color, height:"100vh"}}> 
   </div>
   <div className="fixed flex flex-wrap  bottom-10 inset-x-10 justify-center gap-3 shadow-xl bg-white p-4 rounded-lg">
  <button onClick={()=>setColor("red")} className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
    Red
  </button>
  <button  onClick={()=>setColor("blue")} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
    Blue
  </button>
  <button  onClick={()=>setColor("green")} className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
    Green
  </button>
  <button  onClick={()=>setColor("yellow")} className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
    Yellow
  </button>
</div>

  </>
   
  )
}

export default App
