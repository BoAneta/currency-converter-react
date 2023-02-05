import { css } from "styled-components";
import styled from "styled-components";

export const StyledHeader = styled.h1`
    text-align: center;
    background-color: rgba(255, 255, 255, 0.61);
    border-radius: 65px;
    padding: 5px;
 
`;

export const StyledFieldset = styled.fieldset`
    border-radius: 65px;
    border: 10px inset rgba(76, 162, 220, 0.842);
    background-color: rgba(255, 255, 255, 0.61);
    box-shadow: 0 0 5px 8px rgba(0, 0, 0, 0.427);
`;

export const Title = styled.span`
    width: 205px;
    display: inline-block;
    margin-left: 5px;
`;

export const Field = styled.input`
border: 2px solid rgb(130, 125, 125);
    padding: 10px;
    border-radius: 10px;
    width: 210px;
    margin: 2px;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        max-width: none;
    }

    ${({pln}) => pln && css`
        max-width: 300px;
    `}
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: rgba(76, 162, 220, 0.842);
    font-weight: bold;
    font-size: large;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    transition: 2s;

    &:hover {
        background-color: rgba(58, 123, 166, 0.842);
        transform: scale(1.02);
    }

    &:active {
        background-color: rgba(36, 75, 101, 0.842);
    }
`;

export const Paragraph = styled.p`
    margin-left: 5px;
`;