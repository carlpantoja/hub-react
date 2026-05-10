import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url_serie, APIKey } from "../config/api";
import { SerieDetails } from "../connection/Serie";

export function SeriePage() {
    const [serie, setSerie] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const url = `${url_serie}${id}?${APIKey}`
        setSerie(url)
    }, [id])

    return(SerieDetails(serie))
}