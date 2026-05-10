import { Link } from "react-router-dom"
import { url_image } from "../config/api"

export const Card = (obj) => {
    return(
        <ul>
            <li>
                <Link to={`/catalogo/${obj.type}/details/${obj.obj.id}`}><img src={`${url_image}${obj.obj.poster_path}`} alt={obj.obj.title || obj.obj.name}/></Link>
            </li>
        </ul>
    )
}