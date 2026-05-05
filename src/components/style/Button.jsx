import styled, { css } from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 0.2em;
    ${props => props.$calc && css `
        width: 2em;
        height: 2em;
        margin-left: 1.1em;
        margin-bottom: 0.5em;
        font-size: 1.5em;
        &:hover {
            cursor: pointer;
        }
    `}
    ${props => props.$game && css`
        width: 5em;
        height: 5em;
        margin: 0.8em;
        font-size: 1em;
        &:hover {
            cursor: pointer;
        }
    `}
    ${props => props.$block && css `
        cursor: pointer;
        &:hover {
            cursor: not-allowed;
        }
    `}
    ${props => {
        switch(props.$block) {
            case 'O':
                return css`
                    background-color: #ffff00;
                `
            case 'X':
                return css`
                    background-color: #00ff00;
                `
            default:
                return null;
        }
    }}
    ${props => {
        switch(props.$finish) {
            case 'game-over':
                return css`
                    cursor: none;
                    $:hover {
                        cursor: not-allowed;
                    }
                `
            default:
                return null;
        }
    }}
    ${props => props.$clear && css`
        padding: 5px;
        &:hover {
            cursor: pointer;
        }
    `}
`