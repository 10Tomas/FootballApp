import MatchStatus from './MatchStatus.jsx'

function MatchCard({ match, onClick }) {
  const { home, away, score } = match

  return (
    <button type="button" className="match-card" onClick={onClick}>
      <MatchStatus match={match} />
      <span className="team team-home">{home.name}</span>
      <span className="score">{score ? `${score.home} - ${score.away}` : 'vs'}</span>
      <span className="team team-away">{away.name}</span>
    </button>
  )
}

export default MatchCard
