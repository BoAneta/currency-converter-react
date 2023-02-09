import { css } from "styled-components";
import styled from "styled-components";

export const StyledHeader = styled.h1`
    text-align: center;
    background-color: ${({theme}) => theme.color.transparentWhite};
    border-radius: 65px;
    padding: 5px;
 
`;

export const StyledFieldset = styled.fieldset`
    border-radius: 65px;
    border: 10px inset ${({theme}) => theme.color.lightBlue};
    background-color: ${({theme}) => theme.color.transparentWhite};
    box-shadow: 0 0 5px 8px ${({theme}) => theme.color.lightBlack};
`;

export const Title = styled.span`
    width: 205px;
    display: inline-block;
    margin-left: 5px;
`;

export const Field = styled.input`
    border: 2px solid ${({theme}) => theme.color.grey};
    padding: 10px;
    border-radius: 10px;
    width: 210px;
    margin: 2px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: none;
    }

    ${({ pln }) => pln && css`
        max-width: 300px;
    `}
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: ${({theme}) => theme.color.lightBlue};
    font-weight: bold;
    font-size: large;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    transition: 2s;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.02);
    }

    &:active {
        filter: brightness(140%);
    }
`;

export const Paragraph = styled.p`
    margin-left: 5px;
`;

export const Loading = styled.p`
    color: ${({theme}) => theme.color.tealBlue};
    text-align: center;
    font-size: large;
    font-weight: bold;
`;

export const StyledError = styled.p`
    color: ${({theme}) => theme.color.crimson};
    text-align: center;
    font-size: large;
    font-weight: bold;
`;

export const RatesInfo = styled.p`
    text-align: center;
`;