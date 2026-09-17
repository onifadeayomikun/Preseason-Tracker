const clubs = [
    'Arsenal',
    'Aston Villa',
    'Bournemouth',
    'Brentford',
    'Brighton',
    'Burnley',
    'Chelsea',
    'Crystal Palace',
    'Everton',
    'Fulham',
    'Ipswich Town',
    'Leicester City',
    'Leeds United',
    'Liverpool',
    'Manchester City',
    'Manchester United',
    'Newcastle United',
    'Nottingham Forest',
    'Southampton',
    'Tottenham Hotspur',
    'West Ham United',
    'Wolverhampton Wanderers'
]

const seasons = []

for (let start = 1992; start <= 2026; start++) {
    const end = start + 1
    seasons.push(`${start}-${String(end).slice(-2)}`)
}

function Form() {
    return (
        <form action="" method="get">
            <div>
                <label htmlFor="club-select">Club</label>
                <select id="club-select" name="club">
                    {clubs.map((club) => (
                        <option key={club} value={club}>
                            {club}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="season-select">Season</label>
                <select id="season-select" name="season">
                    {seasons.map((season) => (
                        <option key={season} value={season}>
                            {season}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

export default Form