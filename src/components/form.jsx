import apiClient from '../api/client';
import { useEffect, useState } from 'react';

function Form({ onCountryCodeChange }) {
    const [ clubs, setClubs ] = useState([]);
    const [ seasons, setSeasons ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ selectedClub, setSelectedClub ] = useState('');
    const [ selectedSeason, setSelectedSeason ] = useState('');

    useEffect(() => { apiClient.get("/v1/club")
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
    // const seasons = Array.from(
    //     { length: Number(currentClub?.seasons_available) || 0 },
    //     (_, index) => index + 1
    // );

    useEffect(() => { apiClient.get("/v1/seasons")
        .then(res => {
            const seasonList = Array.isArray(res.data) ? res.data : [];
            setSeasons(seasonList);
            setSelectedSeason(seasonList[0]?.season_label ?? '')
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));        
     });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    

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
                <select id="season-select" name="season" value={selectedSeason}>
                    <option value="">Select a season</option>
                        <option key={season} value={season}>
                            Season {JSON.stringify(data)}
                        </option>
                </select>
            </div>
        </form>
    )
}

export default Form