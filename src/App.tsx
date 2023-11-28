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
      <h1>You are currently viewing as a   
        {selectedOption === 'missionary' ? ' Missionary' : ' Mission Leader'}
      </h1>
    </>
  )
}

export default App
