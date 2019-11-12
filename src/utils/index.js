import { useState, useEffect } from "react";

export const apiURL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json'

export const useFetch = url => {
    const [restarants, setRestaurants] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchRestaurants = async() => {
        const response = await fetch(url)
        const json = await response.json()
        setRestaurants(json)
        setLoading(false)
    }
    useEffect(() => {
        fetchRestaurants()
    }, [url]) //cleanup for useEffect component
    return {restarants, loading}
}