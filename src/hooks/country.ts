// useCountry.ts
import {useState, useEffect} from 'react';
import axios from 'axios';
import {geoInfo} from "@/constants/urls";

const useCountry = () => {
    const [country, setCountry] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(geoInfo);
                const details = response.data
                if (response && response.status === 200) {
                    setCountry(details?.country);
                } else {
                    setCountry(null);
                }
            } catch (error) {
                console.error('Error fetching country:', error);
                setCountry(null);
            }
        };

        fetchCountry().then(r => null);
    }, []);

    return country;
};

export default useCountry;
