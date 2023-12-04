import React, { useState } from 'react'
import "./Survey.css"

export function Survey() {
  const [numericValue, setNumericValue] = useState(5); // Initial value set to 5
  const [booleanValue, setBooleanValue] = useState(false); // Initial value set to false
  const [accomplishment, setAccomplishment] = useState('')
  const [feeling, setFeeling] = useState('normal')
  const [date, setDate] = useState('')
  const [emotion, setEmotion] = useState(3)

  const handleNumericChange = (event) => {
    // Ensure the numeric value is within the 1-10 range
    const newValue = Math.min(10, Math.max(1, parseInt(event.target.value, 10)));
    setNumericValue(newValue);
  };

  const handleBooleanChange = () => {
    setBooleanValue(!booleanValue); // Toggle the boolean value
  };

  const handleSubmit = () => {
    //NEEDSWORK: where do I submit this to??
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Emotional Survey</h1>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h4>How did you feel today emotionally?</h4>
        <div style={{display: 'flex'}}>
          {/* Emojis here */}
          <h1 className='feelingEmoji' onClick={() => setEmotion(1)}>😣</h1>
          <h1 className='feelingEmoji' onClick={() => setEmotion(2)}>🙁</h1>
          <h1 className='feelingEmoji' onClick={() => setEmotion(3)}>😐</h1>
          <h1 className='feelingEmoji' onClick={() => setEmotion(4)}>🙂</h1>
          <h1 className='feelingEmoji' onClick={() => setEmotion(5)}>😀</h1>
        </div>
      </div>

      <br />

      <label>
        How did you feel today physically?
        <select value={feeling} onChange={(event) => setFeeling(event.currentTarget.value)}>
          <option value="energized">Energized</option>
          <option value="good">Good</option>
          <option value="normal">Normal</option>
          <option value="tired">Tired</option>
          <option value="sick">Sick</option>
          <option value="exhausted">Exhausted</option>
        </select>
      </label>

      <br />

      <label>
        What accomplishments can I recognize from the day:
        <input type="text"
        value={accomplishment}
        onChange={(event) => setAccomplishment(event.currentTarget.value)}/>
      </label>

      <br />

      <label>
        Date Input:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.currentTarget.value)}
        />
      </label>

      <br />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
