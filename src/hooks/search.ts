import { useState, useEffect } from 'react';
import {searchUrl} from "../constants/urls";
import axios from 'axios';

interface UseAutocompleteProps {
    query: string;
    limit?: number
}

interface DataItem {
    id: string;
    title: string;
}

const useAutocomplete = ({ query, limit }: UseAutocompleteProps) => {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query && query.length > 3) {
            const fetchData = async () => {
                setLoading(true);
                setError(null);

                try {
                    const response = await axios.get(`${searchUrl}${query}&limit=${limit || 10}`);
                    if (response && response.status === 200) {
                        const {data} = response.data;
                        setData(data)
                    }
                    // setData(result.items);
                } catch (err) {
                    setError('Failed to fetch data');
                } finally {
                    setLoading(false);
                }
            };

            fetchData().then(() => null);
        } else {
            setData([]);
        }
    }, [query, limit]);

    return { data, loading, error };
};

export default useAutocomplete;
