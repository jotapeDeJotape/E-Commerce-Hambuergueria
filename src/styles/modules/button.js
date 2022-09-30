import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    font-weight: 600;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    ${(props => {
        if(props.Button === 'inputButton'){
            return css`
                
                background-color: var(--color-primary);
                color: var(--gray-0);
                width: 30%;

        `
        }else if(props.Button === 'Button'){
            return css`
                
                background-color: var(--color-primary);
                color: var(--gray-0);
                width: 40%;
                :hover{
                    transition: 0.5s;
                    transform: scale(1.010);
                    filter: brightness(110%);
                }
        `
        }
    })}
`