import styled, { css } from "styled-components";

export const Box = styled.div`
    width: 99%;
    align-items: center;
    padding: 5px;
    ${props => props.$game && css`
        display: grid;
        grid-template-columns: repeat(3, 130px);
        grid-template-rows: repeat(3, 120px);
        border-radius: 30px;
        background-color: #d9d9d9;
    `}
    ${props => props.$catalogo && css`
        display: flex;
        overflow-x: scroll;
        img {
            width: 200px;
        }
    `}
    ${props => props.$searchPage && css `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        padding: 0 2rem;
        column-gap: 3rem;
        row-gap: 1rem;
        img {
            width: 200px;
        }
    `}
`