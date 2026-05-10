import { Link } from "react-router-dom"

export function Nav() {
    function dropbox() {
        if(document.getElementById('dropbox-content').style.display === 'none') {
            return document.getElementById('dropbox-content').style.display = 'flex'
        } else {
            return document.getElementById('dropbox-content').style.display = 'none'
        }
    }

    return(
        <nav>
            <div id="dropbox" onClick={dropbox}>
                <i className="fa fa-bars"></i>
                <div id="dropbox-content" style={{display: 'none'}}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/calculadora'}>Calculadora</Link>
                    <Link to={'/jogo-da-velha'}>Jogo da Velha</Link>
                    <Link to={'/catalogo'}>Filmes e Series</Link>
                </div>
            </div>
        </nav>
    )
}