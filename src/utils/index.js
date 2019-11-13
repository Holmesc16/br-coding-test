import { useState, useEffect } from "react";

export const useServiceFetch = url => {
    const [restaurants, setRestaurants] = useState(null)
    const [loading, setLoading] = useState(true)
    
    async function fetchData() {
      const response = await fetch(url)
      const json = await response.json()
     
      setRestaurants(json.restaurants.map(restaurant => restaurant))
      setLoading(false)
    }
    useEffect(() => {
      fetchData()
    }, [url]);
  
    return {loading,restaurants}
  }