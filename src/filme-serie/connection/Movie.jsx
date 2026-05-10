import { useState, useEffect } from "react";
import { url_image } from "../config/api";
import { Card } from "../components/Card";
import { Details } from "../components/Details";

export function Movie(url) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const connect = async() => {
            const response = await fetch(url)
            const data = await response.json()

            setMovie(data.results)
        }

        const link = url
        connect(link)
    }, [url])

    return(movie.map(movie => <Card key={movie.id} obj={movie} type='movie'/>))
}

export function MovieDetails(url) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const connect = async() => {
            const response = await fetch(url)
            const data = await response.json()

            const genre = data.genres.map((obj, index) => {
                if(index === data.genres.length - 1) return obj.name.concat('.')
                else return obj.name.concat(', ')
            })

            const production = data.production_companies.map((obj, index) => {
                if(index === data.production_companies.length - 1) return obj.name.concat('.')
                else return obj.name.concat(', ')
            })

            const array_movie = {
                language: data.original_language,
                title: data.title,
                original_title: data.original_title,
                sinopse: data.overview,
                genre: genre,
                image: `${url_image}${data.poster_path}`,
                release: data.release_date,
                runtime: data.runtime,
                production: production,
                homepage: data.homepage
            }

            setMovie(array_movie)
        }

        const link = url
        connect(link)
    }, [url])

    return(<Details obj={movie}/>)
}