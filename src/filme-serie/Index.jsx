import { Outlet } from "react-router-dom";
import { Container } from "../components/style/Container";
import { Header } from "./components/Header";

export function Index() {
    return(
        <Container $index>
            <Header/>
            <Outlet/>
        </Container>
    )
}