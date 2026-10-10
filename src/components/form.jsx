import apiClient from '../api/client';
import { useEffect, useState } from 'react';

function Form({ onCountryCodeChange }) {
    const [ clubs, setClubs ] = useState([]);
    const [ seasons, setSeasons ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ selectedClub, setSelectedClub ] = useState('');
    const [ selectedSeason, setSelectedSeason ] = useState('');

    useEffect(() => {
        Promise.all([
            apiClient.get("/v1/club"),
            apiClient.get("/v1/seasons"),
        ]) 
            .then(([clubResponse, seasonResponse]) => {
                const clubList = Array.isArray(clubResponse.data) ? clubResponse.data : [];
                const seasonList = Array.isArray(seasonResponse.data) ? seasonResponse.data : [];
                
                setClubs(clubList);
                setSelectedClub(clubList[0]?.name ?? '');
                onCountryCodeChange?.(clubList[0]?.country_code ?? '');

                setSeasons(seasonList);
                setSelectedSeason(seasonList[0]?.season_label ?? '');
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
        }, [onCountryCodeChange])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    

    return (
        <form className="tracker-form" onSubmit={(event) => event.preventDefault()}>
            <div>
                <label htmlFor="club-select">Club</label>
                <select
                    id="club-select"
                    name="club"
                    value={selectedClub}
                    onChange={(event) => setSelectedClub(event.target.value)}
                >
                    {clubs.map((club) => (
                        <option key={club.name} value={club.name}>
                            {club.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="season-select">Season</label>
                <select 
                    id="season-select" 
                    name="season" 
                    value={selectedSeason}
                    onChange={(event) => setSelectedSeason(event.target.value)}
                >
                    <option value="">Select a season</option>
                    {seasons.map((season) => (
                        <option key={season.season_label} value={season.season_label}>
                            {season.season_label}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

export default Form