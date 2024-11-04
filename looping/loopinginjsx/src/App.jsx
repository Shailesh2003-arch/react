import seriesData from './api/seriesData.json'
function App() {
  return (
    <ul>
      {
        seriesData.map(function(currEle){
          return(
            <li key={currEle.name}>
            <img src= {currEle.img_url} alt="loverrunner"  width="40%" height="40%"/>
          <h2 className='text-red-900'>Name: {currEle.name}</h2>
          <h3 className='text-red-900'> Rating: {currEle.rating}</h3>
          <p>Summary: {currEle.description}</p> 
          <p>Genre: {currEle.genre}</p>
          <a href={currEle.watch_url} target='_blank'>
          <button>Watch Now</button>
          </a>
          </li>
          )
         
        })
      }
     
    </ul>
  )
}

export default App
