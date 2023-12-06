import { useContext, useState } from 'react'
import "./Survey.css"
import { SurveyContext } from './main';
import { useNavigate } from 'react-router-dom';

export function Survey() {
  const [physical, setPhysical] = useState('6')
  const [emotion, setEmotion] = useState(1)
  const [accomplishment, setAccomplishment] = useState('')
  const [date, setDate] = useState('')
  const [spiritual, setSpiritual] = useState(3)

  const surveyContext = useContext(SurveyContext)

  const navigate = useNavigate()

  const handleSubmit = () => {
    surveyContext?.setSurveys({dates: [...surveyContext.surveys.dates, date], emotional: {
      scores: [...surveyContext.surveys.emotional.scores, emotion]
    },
    physical: {
      scores: [...surveyContext.surveys.physical.scores, parseInt(physical)]
    }, 
    spiritual: {
      scores: [...surveyContext.surveys.spiritual.scores, spiritual]
    }})
    navigate('/')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
  <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Emotional Survey</h1>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#555' }}>How did you feel today emotionally?</h4>
    <div style={{ display: 'flex' }}>
      {/* Emojis here */}
      {[1, 2, 3, 4, 5].map((num) => (
        <h1 key={num} className={emotion === num ? 'selectedEmoji' : 'feelingEmoji'} onClick={() => setEmotion(num)} style={{ fontSize: '2rem', margin: '0.2rem', cursor: 'pointer' }}>
          {num === 1 ? '😣' : num === 2 ? '🙁' : num === 3 ? '😐' : num === 4 ? '🙂' : '😀'}
        </h1>
      ))}
    </div>
  </div>

  <label style={{ marginBottom: '1rem', color: '#555' }}>
    How did you feel today physically?
    <select
      value={physical}
      onChange={(event) => setPhysical(event.currentTarget.value)}
      style={{ marginLeft: '0.5rem', padding: '0.3rem', fontSize: '1rem' }}
    >
      <option value="10">Energized</option>
      <option value="8">Good</option>
      <option value="6">Normal</option>
      <option value="4">Tired</option>
      <option value="2">Sick</option>
      <option value="0">Exhausted</option>
    </select>
  </label>

  <label style={{ marginBottom: '1rem', color: '#555' }}>
    What accomplishments can I recognize from the day:
    <input
      type="text"
      value={accomplishment}
      onChange={(event) => setAccomplishment(event.currentTarget.value)}
      style={{ marginLeft: '0.5rem', padding: '0.3rem', fontSize: '1rem', width: '100%' }}
    />
  </label>

  <label style={{ marginBottom: '1rem', color: '#555' }}>
    Date Input:
    <input
      type="date"
      value={date}
      onChange={(event) => setDate(event.currentTarget.value)}
      style={{ marginLeft: '0.5rem', padding: '0.3rem', fontSize: '1rem' }}
    />
  </label>

  <label style={{ marginBottom: '1rem', color: '#555' }}>
    How did you feel today spiritually?
    <input
      type="number"
      value={spiritual}
      onChange={(event) => setSpiritual(parseInt(event.currentTarget.value))}
      style={{ marginLeft: '0.5rem', padding: '0.3rem', fontSize: '1rem' }}
    />
  </label>

  <button onClick={handleSubmit} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Submit</button>
</div>

  );
}
