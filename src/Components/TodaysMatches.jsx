import MatchCard from './MatchCard.jsx'

function TodaysMatches({ matches, onSelectMatch }) {
  // Group matches by league so each league gets its own section
  const byLeague = matches.reduce((groups, match) => {
    groups[match.league] = groups[match.league] || []
    groups[match.league].push(match)
    return groups
  }, {})

  return (
    <div className="todays-matches">
      <h1>Today's matches</h1>
      {Object.entries(byLeague).map(([league, leagueMatches]) => (
        <section key={league} className="league-group">
          <h2>{league}</h2>
          {leagueMatches.map((match) => (
            <MatchCard key={match.id} match={match} onClick={() => onSelectMatch(match.id)} />
          ))}
        </section>
      ))}
    </div>
  )
}

export default TodaysMatches
