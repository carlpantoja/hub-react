import styled, { css } from "styled-components";

export const Box = styled.div`
    width: 98%;
    align-items: center;
    padding: 5px;
    ${props => props.$game && css `
        display: grid;
        grid-template-columns: repeat(3, 130px);
        grid-template-rows: repeat(3, 120px);
        border-radius: 30px;
        background-color: #d9d9d9;
    `}
`