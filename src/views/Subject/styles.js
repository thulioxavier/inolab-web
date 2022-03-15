import styled from 'styled-components';

export const Content = styled.div`
    margin-top: 20px;
    width: 100%;
    background-color: #202024;

    border-radius: 5px;
    min-height: 500px;

    padding: 10px;
`;

export const SubjectArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Input = styled.input`
    width: 50%;
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

export const Successfu = styled.span`
    color: #00C880;
    font-weight: 600;
    font-size: 13.5px;
    margin-top: 3px;
`;

export const Button = styled.button`
    
    margin-left: 10px;
    width: 150px;
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

export const TableArea = styled.div`
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    margin-top: 30px;
`;



export const Table  = styled.table`

    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    .center__table{
        text-align: center;
    }
    .table__header{
        background-color: #00C880;
        th{
            color: #484848;
        }
    };

    th, td {
        text-align: left;
        padding: 8px;
    };
    
    tr{
        color: #fafafa;
        &:nth-child(even){
            background-color: #121214;
            color: #fafafa;
        }
    }
`;

