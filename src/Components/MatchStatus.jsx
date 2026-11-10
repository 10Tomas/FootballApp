function MatchStatus({ match }) {
  if (match.status === 'LIVE') return <span className="status status-live">{match.minute}'</span>
  if (match.status === 'FT') return <span className="status">FT</span>
  return <span className="status">{match.kickoff}</span>
}

export default MatchStatus
