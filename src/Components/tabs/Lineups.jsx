function Lineups({ match }) {
  return (
    <div className="two-columns">
      {['home', 'away'].map((side) => {
        const { formation, players } = match.lineups[side]
        return (
          <section key={side}>
            <h3>
              {match[side].name} <span className="formation">{formation}</span>
            </h3>
            <ol className="lineup">
              {players.map((player) => (
                <li key={player}>{player}</li>
              ))}
            </ol>
          </section>
        )
      })}
    </div>
  )
}

export default Lineups
