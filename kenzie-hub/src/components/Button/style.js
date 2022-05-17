import styled, { css } from "styled-components";

export const Container = styled.div`
    button{
    width: 325px;
    font-family: 'Inter', 'sans-serif'
    font-size: 16px;
    weight: 500;
    color: var(--white);
    padding: 10px;
    border: 0;
    border-radius: 4px;
    }
    .primaryColor{
    background-color: var(--colorPrimaryNegative);
    
        &:hover{
            background-color: var(--colorPrimary);
        }
    }
    .secondColor{
    background-color: var(--grey4);

        &:hover{
            background-color: var(--grey2);
        }
    }
    
    @media (max-width: 600px) {
        button{
            width: 260px;
    }

`;
