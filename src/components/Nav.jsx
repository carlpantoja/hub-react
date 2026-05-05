import { Link } from "react-router-dom"

export function Nav() {
    return(
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/calculadora'}>Calculadora</Link>
            <Link to={'/jogo-da-velha'}>Jogo da Velha</Link>
        </nav>
    )
}