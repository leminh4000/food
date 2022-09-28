import yelp from "../api/yelp";
import {useEffect, useState} from "react";

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    useEffect(()=>{searchApi('pasta')}, []);
    return [searchApi, results, errorMessage];
}