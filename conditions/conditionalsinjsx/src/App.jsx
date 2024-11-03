
function App() {

  {/* here we are repeating the code to check the condition*/}
  {/* if the age is >= 18 we will get a button that shows Available(/)}
  {/* if the age is < 18 we will get a button that shows Not Available*/}

  {/* Here we are basically repeating the code which is not a good practice */}

  
  {/*

  let age = 18;
  if (age>=18) {
    return (
      <>
      <button >Available</button>
      </>
    )  
  }

  if (age<18) {
    return (
      <>
      <button>Not Available</button>
      </>
    )  
  }
  
  */}


  {/* Using ternary operator */}

let age = 19;
    return (
      <>
      <button >{age>=18 ? "Available": "Not Available"}</button>
      </>
    )  

}







export default App
