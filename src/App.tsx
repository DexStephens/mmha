import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedOption, setSelectedOption] = useState('missionary')

  return (
    <>
    <div className="dropdown-container">
      <select 
        className="dropdown" style={{margin: '20px'}}
        value={selectedOption} 
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="missionary">Missionary</option>
        <option value="mission_leader">Mission Leader</option>
      </select>
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>You are currently viewing as a   
        {selectedOption === 'missionary' ? ' Missionary' : ' Mission Leader'}



      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
