import styled from 'styled-components';


export const ContentForm = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 890px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const FormInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 890px) {
        display: none;
    }
`;

export const Title = styled.h1`
    color: #FFFF;
    font-size: 45px;
`;

export const Logo = styled.img`
    width: 150px;
    height: 150px;
`;

export const Info = styled.span`
    color: #FFFF;
    font-weight: 200;
    font-size: 24px;
`;


export const FormArea = styled.form`
    width: 50%;
    height: 100%;
    display: flex;
    
    border-radius:0 5px 5px 0;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #202024;

    @media (max-width: 890px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    width: 100%;
    padding: 5px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 10px;

`;
export const Label = styled.label`
    color: #FFFF;
    margin-bottom: 5px;
    font-size: 16px;
`;


export const ResetPassword = styled.a`
    text-decoration: none;
    outline: none;

    margin-top: 10px;

    text-align: start;

    font-size: 14px;
    font-weight: bold;

    transition: 0.5s;
    color: #E75353;

    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;

    border-radius: 5px;
    border: 2px solid transparent;

    outline: none;
    overflow: none;

    padding: 0 5px;
    color: #DDD;
    background-color: #121214;
    transition: 0.6s;

    ::placeholder{
        color: #DDD;
    }
    :focus{
        border: 2px solid #00C880;
    }
`;

export const Error = styled.span`
    color: #E75353;
    font-weight: 600;
    font-size: 13.5px;
    margin-top: 3px;

`;

export const Button = styled.button`

    margin-top: 15px;
    
    width: 80%;
    height: 40px;
    border-radius: 5px;

    background-color: #00C880;
    border: 2px solid transparent;

    padding: 0 5px;
    color: #FFFF;
    font-size: 18px;
    font-weight: bold;
    transition: 0.6s;

    ${({disabled}) => (

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