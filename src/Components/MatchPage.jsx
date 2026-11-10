import { useState } from 'react'
import MatchHeader from './MatchHeader.jsx'
import MatchDetails from './tabs/MatchDetails.jsx'
import LeagueTable from './tabs/LeagueTable.jsx'
import Statistics from './tabs/Statistics.jsx'
import TeamNews from './tabs/TeamNews.jsx'
import Lineups from './tabs/Lineups.jsx'
import Odds from './tabs/Odds.jsx'

// Add a new tab by adding one line here
const TABS = [
  { id: 'details', label: 'Match details', Component: MatchDetails },
  { id: 'table', label: 'Table', Component: LeagueTable },
  { id: 'stats', label: 'Statistics', Component: Statistics },
  { id: 'news', label: 'Team news', Component: TeamNews },
  { id: 'lineups', label: 'Starting XI', Component: Lineups },
  { id: 'odds', label: 'Odds', Component: Odds },
]

function MatchPage({ match, onBack }) {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const { Component } = TABS.find((tab) => tab.id === activeTab)

  return (
    <div className="match-page">
      <button type="button" className="back-button" onClick={onBack}>
        ← Back to today's matches
      </button>

      <MatchHeader match={match} />

      <nav className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab}
            className={tab.id === activeTab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="tab-content" role="tabpanel">
        <Component match={match} />
      </div>
    </div>
  )
}

export default MatchPage
