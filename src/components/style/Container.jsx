import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 20em;
    border-radius: 15px;
    padding: 0.5em;
    ${props => props.$calc && css `
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
`