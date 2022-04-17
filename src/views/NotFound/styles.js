import styled from "styled-components";
import { COLORS } from "../../utils";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NotFound = styled.h1`
    color: ${COLORS.black};

    font-size: 120px;
    text-align: center;

    margin-bottom: 40px;
`;

export const NotFoundSub = styled.h2`
    color: ${COLORS.black};

    font-size: 40px;
    font-weight: 200;
    margin-bottom: 15px;
    margin-top: 0;
    text-align: center;

`;

export const NotFoundInfo = styled.h3`
    color: ${COLORS.black};

    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin-top: 0;
`;

export const Button = styled.button`

    margin-top: 15px;
    
    width: 250px;
    height: 40px;
    border-radius: 5px;

    background-color: #00C880;
    border: 2px solid transparent;

    padding: 0 5px;
    color: #FFFF;
    font-size: 18px;
    font-weight: bold;
    transition: 0.6s;

    ${({ disabled }) => (

        disabled ? `
            opacity: 0.5;
            cursor: not-allowed

        ` :
            `:hover{
        background-color: #121214;
        border: 2px solid #00C880;
        color: #00C880;

        cursor: pointer;
    }`
    )}
    

`;