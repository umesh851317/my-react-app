import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseFetch = (url) => {
       const [data, setData] = useState()
       const [err, setError] = useState()
       useEffect(() => {
              const fetchApi = async (url) => {
                     try {
                            const respo = await fetch(url)
                            if (!respo.ok) {
                                   throw new Error("Failed to fetch");
                            }
                            const res = await respo.json()
                            setData(res)
                     } catch (error) {
                            setError(error)
                     }
              }
              fetchApi(url)
       }, [url])
       return {
              data, err
       }
}

export default UseFetch
