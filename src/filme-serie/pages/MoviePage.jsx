import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { url_movie, APIKey } from "../config/api"
import { MovieDetails } from "../connection/Movie"

export function MoviePage() {
    const [movie, setMovie] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const url = `${url_movie}${id}?${APIKey}`
        setMovie(url)
    }, [id])

    return(MovieDetails(movie))
}