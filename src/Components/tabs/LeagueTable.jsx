import { leagueTables } from '../../data/mockData.js'

function LeagueTable({ match }) {
  const table = leagueTables[match.league] || []
  const playing = [match.home.name, match.away.name]

  return (
    <div className="table-wrapper">
      <table className="league-table">
        <thead>
          <tr>
            <th>#</th>
            <th className="col-team">Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row.team} className={playing.includes(row.team) ? 'highlight' : ''}>
              <td>{row.pos}</td>
              <td className="col-team">{row.team}</td>
              <td>{row.played}</td>
              <td>{row.won}</td>
              <td>{row.drawn}</td>
              <td>{row.lost}</td>
              <td>{row.gf - row.ga}</td>
              <td><strong>{row.points}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeagueTable
