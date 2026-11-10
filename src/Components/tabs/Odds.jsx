function Odds({ match }) {
  // Highlight the best price in each column
  const best = (key) => Math.max(...match.odds.map((o) => o[key]))

  return (
    <div className="table-wrapper">
      <table className="odds-table">
        <thead>
          <tr>
            <th className="col-team">Bookmaker</th>
            <th>1 ({match.home.short})</th>
            <th>X</th>
            <th>2 ({match.away.short})</th>
          </tr>
        </thead>
        <tbody>
          {match.odds.map((row) => (
            <tr key={row.bookmaker}>
              <td className="col-team">{row.bookmaker}</td>
              {['home', 'draw', 'away'].map((key) => (
                <td key={key} className={row[key] === best(key) ? 'best-odds' : ''}>
                  {row[key].toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Odds
