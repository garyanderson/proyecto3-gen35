import {useState} from "react"
import axios from "axios"

const useFetch = (url) => {

    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(true)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setResponse(res.data)
            setHasError(false)
        })
        .catch(err => {
            setHasError(true)
        })
        .finally(() => setLoading(false))        
    }

    return [response, getApi, hasError, loading]
}

export default useFetch