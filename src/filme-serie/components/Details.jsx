import { Link } from "react-router-dom"
import { Container } from "../../components/style/Container"

export function Details(obj) {
    return(
        <Container $details>
            <h2>{obj.obj.title}</h2>
            {obj.obj.language !== 'en' ? <h3>Título original: {obj.obj.original_title}</h3> : ''}
            {obj.obj.created_by ? <h3>Criado por: {obj.obj.created_by}</h3> : ''}
            <h3>Gênero: {obj.obj.genre}</h3>
            {obj.obj.season ? <h3>Nº de temporadas: {obj.obj.season}</h3>: ''}
            {obj.obj.episodes ? <h3>Nº de episódios: {obj.obj.episodes}</h3>: ''}
            <h3>Produção: {obj.obj.production}</h3>
            {obj.obj.runtime ? <h3>Duração: {obj.obj.runtime} min</h3> : ''}
            <h3>Data de lançamento: {obj.obj.release}</h3>
            <h3>Página oficial: <Link to={obj.obj.homepage}>{obj.obj.homepage}</Link></h3>
            <div className="capa">
                <img src={obj.obj.image} alt={obj.obj.title}/>
                <div className="sinopse">
                    <h3>Sinopse: {obj.obj.sinopse}</h3>
                </div>
            </div>
        </Container>
    )
}