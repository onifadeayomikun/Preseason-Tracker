import { useState } from 'react'
import './App.css'
import Map from './map.jsx'
import Form from './form.jsx'

function Heading() {
  return <h1 className="heading">Preseason Tracker</h1>
}

function App() {
  const [isLightMode, setIsLightMode] = useState(false)
  const [selectedClubCountryCode, setSelectedClubCountryCode] = useState('')

  return (
    <div className={`app ${isLightMode ? 'light' : 'dark'}`}>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setIsLightMode((prev) => !prev)}
        aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {isLightMode ? 'Dark mode' : 'Light mode'}
      </button>
      <Heading />
      <Form onCountryCodeChange={setSelectedClubCountryCode} />
      <Map selectedCountryCode={selectedClubCountryCode} />
    </div>
  )
}

export default App
