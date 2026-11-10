function TeamNews({ match }) {
  return (
    <div className="two-columns">
      {['home', 'away'].map((side) => (
        <section key={side}>
          <h3>{match[side].name}</h3>
          <ul className="news-list">
            {match.news[side].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default TeamNews
