import { useState } from 'react'
import TodaysMatches from './Components/TodaysMatches.jsx'
import MatchPage from './Components/MatchPage.jsx'
import { matches } from './data/mockData.js'
import './App.css'

function App() {
  const [selectedMatchId, setSelectedMatchId] = useState(null)
  const selectedMatch = matches.find((match) => match.id === selectedMatchId)

  return (
    <main className="app">
      {selectedMatch ? (
        <MatchPage match={selectedMatch} onBack={() => setSelectedMatchId(null)} />
      ) : (
        <TodaysMatches matches={matches} onSelectMatch={setSelectedMatchId} />
      )}
    </main>
  )
}

export default App
