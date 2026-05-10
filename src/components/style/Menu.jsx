import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #d9d9d9;
    padding: 0.5em;
    .search {
        padding: 0.2em;
    }

    .search i {
        cursor: pointer;
    }

    .search input {
        background-color: transparent;
        border: none;
    }

    .search input:focus {
        outline: none;
        border-bottom: 1px solid;
    }
`