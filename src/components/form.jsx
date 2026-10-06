import apiClient from '../api/client';
import { useEffect, useState } from 'react';

function Form({ onCountryCodeChange }) {
    const [ clubs, setClubs ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ selectedClub, setSelectedClub ] = useState('');
    const [ selectedSeason, setSelectedSeason ] = useState('');

    useEffect(() => {
        apiClient.get("/v1/club")
            .then(res => {
                const clubList = Array.isArray(res.data) ? res.data : [];
                setClubs(clubList);
                setSelectedClub(clubList[0]?.name ?? '');
                onCountryCodeChange?.(clubList[0]?.country_code ?? '');
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [onCountryCodeChange])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const currentClub = clubs.find((club) => club.name === selectedClub);
    const seasons = Array.from(
        { length: Number(currentClub?.seasons_available) || 0 },
        (_, index) => index + 1
    );

    return (
        <form className="tracker-form" onSubmit={(event) => event.preventDefault()}>
            <div>
                <label htmlFor="club-select">Club</label>
                <select id="club-select" name="club">
                        <option key={club} value={club}>
                            {JSON.stringify(data)}
                        </option>
                </select>
            </div>

            <div>
                <label htmlFor="season-select">Season</label>
                <select
                    id="season-select"
                    name="season"
                    value={selectedSeason}
                    onChange={(event) => setSelectedSeason(event.target.value)}
                    disabled={seasons.length === 0}
                >
                    <option value="">Select a season</option>
                    {seasons.map((season) => (
                        <option key={season} value={season}>
                            Season {season}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

export default Form