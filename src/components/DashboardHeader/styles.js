import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDashboard = styled.header`
    width: 100%;
    width: 1800px;

    margin-left: auto;
    margin-right: auto;
    height: 45px;
    background-color: #121214;

    z-index: 900;
    
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

    color: #FAFAFA;

    font-weight: bold;

    margin-right: 10px;
    margin-top: 0;
    margin-bottom: 0;

    font-size: 18px;

`;

