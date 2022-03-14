import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDashboard = styled.header`
    width: 100%;
    height: 45px;
    background-color: #00C880;

    margin-top: 10px;

    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    nav{
        padding: 0 10px;
    }
`;

export const LinkHeader = styled(Link)`
    text-decoration: none;
    outline: none;
    overflow: none;

    color: #121214;

    margin-right: 10px;
    margin-top: 0;
    margin-bottom: 0;

    font-size: 18px;

`;

