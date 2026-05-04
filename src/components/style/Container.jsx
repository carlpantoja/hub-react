import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 20em;
    border-radius: 15px;
    padding: 0.5em;
    ${props => props.$calc && css `
        background-color: #000;
    `}
`