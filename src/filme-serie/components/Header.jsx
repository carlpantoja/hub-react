import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "../../components/style/Menu";

export function Header() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!search) return

        navigate(`/catalogo/search?q=${search}`)
        setSearch("")
    }

    return(
        <Menu>
            <Link to={'/catalogo'}>Inicio</Link>
            <form onSubmit={handleSubmit}>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="search" placeholder="Pesquise um filme ou série" onChange={(e) => setSearch(e.target.value)} value={search}/>
                </div>
            </form>
        </Menu>
    )
}