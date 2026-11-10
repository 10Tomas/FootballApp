function Statistics({ match }) {
  if (match.stats.length === 0) {
    return <p className="empty">Statistics will be available once the match starts.</p>
  }

  return (
    <ul className="stats">
      {match.stats.map((stat) => {
        const total = stat.home + stat.away || 1
        return (
          <li key={stat.label} className="stat">
            <div className="stat-values">
              <span>{stat.home}</span>
              <span className="stat-label">{stat.label}</span>
              <span>{stat.away}</span>
            </div>
            <div className="stat-bar">
              <div className="stat-bar-home" style={{ width: `${(stat.home / total) * 100}%` }} />
              <div className="stat-bar-away" style={{ width: `${(stat.away / total) * 100}%` }} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Statistics
