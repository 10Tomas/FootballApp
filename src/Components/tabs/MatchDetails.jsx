const EVENT_ICONS = { goal: '⚽', yellow: '🟨', red: '🟥', sub: '🔄' }

function MatchDetails({ match }) {
  return (
    <div>
      <dl className="info-list">
        <dt>Kick-off</dt>
        <dd>{match.kickoff}</dd>
        <dt>Venue</dt>
        <dd>{match.venue}</dd>
        <dt>Referee</dt>
        <dd>{match.referee}</dd>
      </dl>

      <h3>Events</h3>
      {match.events.length === 0 ? (
        <p className="empty">The match hasn't started yet.</p>
      ) : (
        <ul className="events">
          {match.events.map((event, i) => (
            <li key={i} className={`event event-${event.team}`}>
              <span className="event-minute">{event.minute}'</span>
              <span>{EVENT_ICONS[event.type]}</span>
              <span>{event.player}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MatchDetails
