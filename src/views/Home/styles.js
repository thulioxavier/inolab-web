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

export const DashboardInfo = styled.div`
    width: 100%;
    height: 180px;

    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;

    padding: 10px;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    overflow-x:scroll;
    overflow-y: hidden;
    
    background-color: #fff;

`;

export const HeaderCard = styled.div`
    width: 100%;
    height: 20px;   

    border-radius: 5px 5px 0 0;

    background-color: ${({color}) => (color)};
`;

export const CardInfo = styled.div`
    min-width: 250px;
    height: 150px;
    margin-right: 15px;

    display: flex;
    justify-content: center;
    align-items: top;

    border-radius: 5px;

    background-color: #121214;

`;

