import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(true);
    const [fetched, isFetched] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
                .then(response => {
                    isFetched(false);
                    setProducts(response.data);
                })
                .catch(error => {
                    // Handle the error here
                    setError('This is wrong')
                    isFetched(false);
                });
        }, 2000);

    }, [url])

    return { products, error, fetched }
}

export default useFetch;