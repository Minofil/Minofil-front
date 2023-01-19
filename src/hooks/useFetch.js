import { useState, useEffect, useRef } from "react"
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const log = useRef(true)
    useEffect(() => {


        const fetchData = async () => {
            setLoading(true)
            try {
                if (log.current) {
                    log.current = false;
                const res = await axios.get(url);
                    setData(res.data)
                }
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        };

        fetchData()
    }, [url]);


    const reFetch = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url);
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    };

    return { data, loading, error, reFetch }
}

export default useFetch;