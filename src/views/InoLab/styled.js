import styled from "styled-components";

export const Header = styled.header`

    display: flex;
    
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    height: 30px;
`;

export const BottomLogin = styled.button`
    font-size: 16px;
`;

export const Nav = styled.nav`

    width: 100%;
    max-width: 1200px;  
    height: 60px;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    
    >ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        list-style-type: none;

        padding: 0;

        >li{
            color: #484848;
            margin-right: 50px;

            font-size: 18px;
            
        }

        >li:nth-child(2n){
            margin-right: 0;
        }
    }
`;

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    width: 100%;
    max-width: 1200px;
    height: 100vh;

    background-color: red;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100px;

    background-color: green;
`;