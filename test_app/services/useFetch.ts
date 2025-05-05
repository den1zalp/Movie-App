//This hook will allow us to handle API requests and responses in a more organized way.

import { useEffect, useState } from "react";

//useFetch hook will accept the fetch function and the query as parameters.

//useFetch(fetchMovies)
const useFetch = <T>(fetchFunction : () => Promise<T>, autoFetch = true) => { 
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState<Error | null>(null);


    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null); // Reset error state before fetching

            const result = await fetchFunction();

            setData(result); // Set the data state with the fetched data
        }
        
        
        catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null); // Reset the data state to null
        setLoading(false); // Reset the loading state to false
        setError(null); // Reset the error state to null
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
         } // Automatically fetch data when the component mounts
        }, [])

    return { data, loading, error, refetch: fetchData, reset }; // Return the data, loading state, error state, fetch function and reset function

}

export default useFetch; // Export the useFetch hook for use in other components