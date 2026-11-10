// Mock data — replace with calls to a real football API later.

export const leagueTables = {
  'Premier League': [
    { pos: 1, team: 'Arsenal', played: 9, won: 7, drawn: 1, lost: 1, gf: 19, ga: 6, points: 22 },
    { pos: 2, team: 'Liverpool', played: 9, won: 6, drawn: 2, lost: 1, gf: 18, ga: 8, points: 20 },
    { pos: 3, team: 'Manchester City', played: 9, won: 6, drawn: 1, lost: 2, gf: 20, ga: 10, points: 19 },
    { pos: 4, team: 'Chelsea', played: 9, won: 5, drawn: 2, lost: 2, gf: 15, ga: 10, points: 17 },
    { pos: 5, team: 'Tottenham', played: 9, won: 4, drawn: 3, lost: 2, gf: 14, ga: 11, points: 15 },
    { pos: 6, team: 'Newcastle', played: 9, won: 4, drawn: 2, lost: 3, gf: 12, ga: 10, points: 14 },
    { pos: 7, team: 'Aston Villa', played: 9, won: 4, drawn: 1, lost: 4, gf: 11, ga: 12, points: 13 },
    { pos: 8, team: 'Manchester United', played: 9, won: 3, drawn: 3, lost: 3, gf: 12, ga: 13, points: 12 },
  ],
  Allsvenskan: [
    { pos: 1, team: 'Malmö FF', played: 28, won: 18, drawn: 5, lost: 5, gf: 55, ga: 24, points: 59 },
    { pos: 2, team: 'Hammarby', played: 28, won: 17, drawn: 6, lost: 5, gf: 50, ga: 27, points: 57 },
    { pos: 3, team: 'AIK', played: 28, won: 15, drawn: 7, lost: 6, gf: 41, ga: 28, points: 52 },
    { pos: 4, team: 'Djurgården', played: 28, won: 14, drawn: 6, lost: 8, gf: 44, ga: 32, points: 48 },
    { pos: 5, team: 'IFK Göteborg', played: 28, won: 12, drawn: 8, lost: 8, gf: 38, ga: 33, points: 44 },
    { pos: 6, team: 'BK Häcken', played: 28, won: 12, drawn: 5, lost: 11, gf: 45, ga: 40, points: 41 },
  ],
}

const lineup = (formation, players) => ({ formation, players })

export const matches = [
  {
    id: 1,
    league: 'Premier League',
    kickoff: '18:30',
    status: 'LIVE',
    minute: 67,
    venue: 'Emirates Stadium',
    referee: 'Michael Oliver',
    home: { name: 'Arsenal', short: 'ARS', color: '#ef0107' },
    away: { name: 'Chelsea', short: 'CHE', color: '#034694' },
    score: { home: 2, away: 1 },
    events: [
      { minute: 12, team: 'home', type: 'goal', player: 'Saka' },
      { minute: 28, team: 'away', type: 'yellow', player: 'Caicedo' },
      { minute: 41, team: 'away', type: 'goal', player: 'Palmer' },
      { minute: 58, team: 'home', type: 'goal', player: 'Ødegaard' },
      { minute: 63, team: 'home', type: 'sub', player: 'Trossard → Martinelli' },
    ],
    stats: [
      { label: 'Possession %', home: 56, away: 44 },
      { label: 'Shots', home: 13, away: 8 },
      { label: 'Shots on target', home: 6, away: 3 },
      { label: 'Corners', home: 7, away: 3 },
      { label: 'Fouls', home: 9, away: 12 },
      { label: 'Yellow cards', home: 0, away: 2 },
    ],
    lineups: {
      home: lineup('4-3-3', ['Raya', 'White', 'Saliba', 'Gabriel', 'Calafiori', 'Rice', 'Ødegaard', 'Merino', 'Saka', 'Havertz', 'Martinelli']),
      away: lineup('4-2-3-1', ['Sánchez', 'James', 'Fofana', 'Colwill', 'Cucurella', 'Caicedo', 'Fernández', 'Madueke', 'Palmer', 'Neto', 'Jackson']),
    },
    news: {
      home: ['Tomiyasu still out with a knee injury.', 'Ødegaard returns to the starting eleven.'],
      away: ['Reece James passed a late fitness test.', 'Lavia is suspended after five yellow cards.'],
    },
    odds: [
      { bookmaker: 'Bet365', home: 1.85, draw: 3.6, away: 4.2 },
      { bookmaker: 'Unibet', home: 1.88, draw: 3.55, away: 4.1 },
      { bookmaker: 'Betsson', home: 1.82, draw: 3.7, away: 4.3 },
    ],
  },
  {
    id: 2,
    league: 'Premier League',
    kickoff: '21:00',
    status: 'NS',
    venue: 'Anfield',
    referee: 'Anthony Taylor',
    home: { name: 'Liverpool', short: 'LIV', color: '#c8102e' },
    away: { name: 'Manchester City', short: 'MCI', color: '#6cabdd' },
    score: null,
    events: [],
    stats: [],
    lineups: {
      home: lineup('4-3-3', ['Alisson', 'Alexander-Arnold', 'Konaté', 'Van Dijk', 'Robertson', 'Gravenberch', 'Mac Allister', 'Szoboszlai', 'Salah', 'Jota', 'Díaz']),
      away: lineup('4-1-4-1', ['Ederson', 'Walker', 'Dias', 'Akanji', 'Gvardiol', 'Rodri', 'Bernardo', 'De Bruyne', 'Foden', 'Doku', 'Haaland']),
    },
    news: {
      home: ['Alisson is back in training and expected to start.'],
      away: ['Stones doubtful with a muscle problem.'],
    },
    odds: [
      { bookmaker: 'Bet365', home: 2.4, draw: 3.5, away: 2.8 },
      { bookmaker: 'Unibet', home: 2.45, draw: 3.45, away: 2.75 },
    ],
  },
  {
    id: 3,
    league: 'Allsvenskan',
    kickoff: '15:00',
    status: 'FT',
    venue: 'Eleda Stadion',
    referee: 'Glenn Nyberg',
    home: { name: 'Malmö FF', short: 'MFF', color: '#7fb3e0' },
    away: { name: 'AIK', short: 'AIK', color: '#1d1d1b' },
    score: { home: 3, away: 0 },
    events: [
      { minute: 22, team: 'home', type: 'goal', player: 'Berg' },
      { minute: 55, team: 'away', type: 'red', player: 'Hussein' },
      { minute: 61, team: 'home', type: 'goal', player: 'Christiansen' },
      { minute: 88, team: 'home', type: 'goal', player: 'Botheim' },
    ],
    stats: [
      { label: 'Possession %', home: 62, away: 38 },
      { label: 'Shots', home: 17, away: 6 },
      { label: 'Shots on target', home: 8, away: 2 },
      { label: 'Corners', home: 9, away: 2 },
      { label: 'Fouls', home: 8, away: 14 },
      { label: 'Red cards', home: 0, away: 1 },
    ],
    lineups: {
      home: lineup('4-4-2', ['Dahlin', 'Larsson', 'Duric', 'Jansson', 'Gwargis', 'Christiansen', 'Rosengren', 'Berg', 'Kiese Thelin', 'Haksabanovic', 'Botheim']),
      away: lineup('3-5-2', ['Nordfeldt', 'Mäkitalo', 'Hussein', 'Papagiannopoulos', 'Elyounoussi', 'Fischer', 'Bahoui', 'Guidetti', 'Thill', 'Otieno', 'Abdi']),
    },
    news: {
      home: ['Unchanged side from last weekend.'],
      away: ['Two key defenders out injured.'],
    },
    odds: [
      { bookmaker: 'Svenska Spel', home: 1.7, draw: 3.8, away: 4.8 },
      { bookmaker: 'Unibet', home: 1.72, draw: 3.75, away: 4.6 },
    ],
  },
]
