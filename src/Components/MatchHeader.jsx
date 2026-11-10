import MatchStatus from './MatchStatus.jsx'

function MatchHeader({ match }) {
  const { home, away, score } = match

  return (
    <header className="match-header">
      <div className="match-header-league">{match.league}</div>
      <div className="match-header-teams">
        <TeamBadge team={home} />
        <div className="match-header-score">
          <span className="big-score">{score ? `${score.home} - ${score.away}` : 'vs'}</span>
          <MatchStatus match={match} />
        </div>
        <TeamBadge team={away} />
      </div>
    </header>
  )
}

function TeamBadge({ team }) {
  return (
    <div className="team-badge">
      <span className="badge" style={{ background: team.color }}>{team.short}</span>
      <span>{team.name}</span>
    </div>
  )
}

export default MatchHeader
