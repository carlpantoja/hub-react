import styled, { css } from "styled-components";

export const Container = styled.div`
    ${props => props.$calc && css `
        width: 20em;
        border-radius: 15px;
        padding: 0.5em;
        background-color: #000;
    `}
    ${props => props.$game && css`
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            display: flex;
            margin: 10px;
            p {
                margin-right: 10px;
            }
        }
    `}
    ${props => props.$index && css`
        width: 100%;
        padding: 0;
        h2 {
            padding: 5px;
            text-align: center;
        }
    `}
    ${props => props.$searchPage && css`
        padding: 15px;
    `}
    ${props => props.$details && css`
        width: 100%;
        h3 {
            font-weight: normal;
            padding: 5px;
            }
        .capa {
            display: flex;
            padding: 5px;
            img {
                width: 300px;
            }
            .sinopse {
                width: 80%;
                padding: 5px;
            }
        }
    `}
`