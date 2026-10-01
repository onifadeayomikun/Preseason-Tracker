import apiClient from '../api/client';
import { useEffect, useState } from 'react';

function Form() {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    {JSON.stringify(data)}

    useEffect(() => {
        apiClient.get("/v1/club")
            .then(res => setData(res.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    {JSON.stringify(data)}

    return (
        <form action="" method="get">
            <div>
                <label htmlFor="club-select">Club</label>
                <select id="club-select" name="club">
                        <option key={club} value={club}>
                            {JSON.stringify(data.rows)}
                        </option>
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