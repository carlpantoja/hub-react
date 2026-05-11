import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { movie_search, serie_search } from "../config/api";
import { Movie } from "../connection/Movie";
import { Serie } from "../connection/Serie";
import { Container } from "../../components/style/Container";
import { Box } from "../../components/style/Box";

export function SearchPage() {
    const [searchMovie, setSearchMovie] = useState([])
    const [searchSerie, setSearchSerie] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    useEffect(() => {
        const urlMovie = `${movie_search}${query}`
        setSearchMovie(urlMovie)

        const urlSerie = `${serie_search}${query}`
        setSearchSerie(urlSerie)
    }, [query])

    return(
        <Container $searchPage>
            <Box $searchPage>
                {Movie(searchMovie)}
                {Serie(searchSerie)}
            </Box>
        </Container>
    )
}