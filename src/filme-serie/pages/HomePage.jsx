import { useState, useEffect } from "react"
import { movie_popular, serie_popular } from "../config/api"
import { Movie } from "../connection/Movie"
import { Serie } from "../connection/Serie"
import { Box } from "../../components/style/Box"
import { Container } from "../../components/style/Container"

export function HomePage() {
    const [movie, setMovie] = useState([])
    const [serie, setSerie] = useState([])

    useEffect(() => {
        setMovie(movie_popular)
        setSerie(serie_popular)
    }, [])

    return(
        <Container $index>
            <h2>Filmes Populares</h2>
            <Box $catalogo>
                {Movie(movie)}
            </Box>
            <h2>Séries Populares</h2>
            <Box $catalogo>
                {Serie(serie)}
            </Box>
        </Container>
    )
}