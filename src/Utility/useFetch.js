import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
          .then(resp => {
              if(!resp.ok) {
                  throw Error('Data could not be fetched');
              }
              return resp.json();
          })
          .then(data => {
              setData(data);
              setLoading(false);
              setErrorMessage(null);
          })
          .catch(error => {
              if (error.name === 'AbortError') {
                console.log('Fetch aborted');
              } else {
                setLoading(false);
                setErrorMessage(error.message);
              }
          })

          return () => abortCont.abort();
    }, [url]); 

    return { data, loading, errorMessage }
}

export default useFetch