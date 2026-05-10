import { useState, useEffect } from "react";
import { url_image } from "../config/api";
import { Card } from "../components/Card";
import { Details } from "../components/Details";

export function Serie(url) {
    const [serie, setSerie] = useState([])

    useEffect(() => {
        const connect = async() => {
            const response = await fetch(url)
            const data = await response.json()

            setSerie(data.results)
        }

        const link = url
        connect(link)
    }, [url])

    return(serie.map((serie) => <Card key={serie.id} obj={serie} type='serie'/>))
}

export function SerieDetails(url) {
    const [serie, setSerie] = useState([])

    useEffect(() => {
        const connect = async() => {
            const response = await fetch(url)
            const data = await response.json()

            const created_by = data.created_by.map((obj, index) => {
                if(index === data.genres.length - 1) return obj.name.concat('.')
                else return obj.name.concat(', ')
            })

            const genre = data.genres.map((obj, index) => {
                if(index === data.genres.length - 1) return obj.name.concat('.')
                else return obj.name.concat(', ')
            })

            const production = data.production_companies.map((obj, index) => {
                if(index === data.production_companies.length - 1) return obj.name.concat('.')
                else return obj.name.concat(', ')
            })

            const array_serie = {
                language: data.original_language,
                created_by: created_by,
                title: data.name,
                original_title: data.original_name,
                season: data.number_of_seasons,
                episodes: data.number_of_episodes,
                sinopse: data.overview,
                genre: genre,
                image: `${url_image}${data.poster_path}`,
                release: data.first_air_date,
                runtime: data.episode_run_time,
                production: production,
                homepage: data.homepage
            }

            setSerie(array_serie)
        }

        const link = url
        connect(link)
    }, [url])

    return(<Details obj={serie}/>)
}