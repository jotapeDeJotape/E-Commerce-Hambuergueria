import styled, { css } from "styled-components";


export const StyledTitle = styled.h1`
    font-weight: bold;
    /* ${({fontSize}) => {
        switch(fontSize){
            case 'one':
                return css`
                font-size: 26px;
                `
            case 'two':
                return css`
                font-size: 22px;
                `
            case 'three':
                return css`
                font-size: 18px;
                `
            case 'four':
                return css`
                font-size: 14px;
                `    
        }
    }} */
    ${(props) => {
        if(props.fontSize === 'one'){
            return css`
                font-size: 26px;
                color:var(--gray-100) ;
                small{
                    color: #EB5757;
                    font-size: 16px;
                }
                `
        }
        else if(props.fontSize === 'two'){
            return css`
                font-size: 22px;
                `
        }
        else if(props.fontSize === 'three'){
            return css`
                font-size: 18px;
                `
        }
        else if(props.fontSize === 'four'){
            return css`
                font-size: 14px;
                `
        }else if(props.fontSize === 'Headline'){
            return css`
                font-weight: 400;
                font-size: 16px;
            `
        }else if(props.fontSize === 'Body'){
            return css`
                font-weight: bold;
                font-size: 14px;
                color: var(--color-primary);
            `
        }else if(props.fontSize === 'Body-600'){
            return css`
                font-weight: 600;
                font-size: 14px;
            `
        }else if(props.fontSize === 'Caption'){
            return css`
                font-weight: 500;
                opacity: 50%;
                font-size: 12px;
            `
        }
        
    }}

`


// .Headline{
//     font-weight: 400;
//     font-size: 16px;
// }
// .Body{
//     font-weight: 400;
//     font-size: 14px;
// }
// .Body-600{
//     font-weight: 600;
//     font-size: 14px;
// }
// .Caption{
//     font-weight: 400;
//     font-size: 12px;
// }