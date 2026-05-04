import styled, { css } from "styled-components";

export const Button = styled.button`
    border: none;
    &:hover {
        cursor: pointer;
    }
    ${props => props.$calc && css `
        width: 2em;
        height: 2em;
        margin-left: 1.1em;
        margin-bottom: 0.5em;
        border-radius: 0.2em;
        font-size: 1.5em;
    `}
`