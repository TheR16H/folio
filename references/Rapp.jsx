


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import images from './components/showcaaseGallery';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1> Helloooo </h1>
      <h2> lets put something here i dont know what yet.</h2>
   <div>
   <h1>Welcome to My App!</h1>
   <w /> {/* Render the showcaaseGallery component here */}
      {/* <container>
      <a href="https://vitejs.dev" target="_blank">
        </a> */}
      {/* </container> */}
      <img src="../images/showcase3gif.gif" className="logo" alt="Description of the image" />
      <img src="./images/showcase1gif.gif" className="logo" alt="Description of the image" />


      </div>







 </> ) 
     
}



export default App
