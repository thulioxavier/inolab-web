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



export const Content = styled.div`
    display: flex;
    width: 100%;


    margin-top: 50px;
    margin-bottom: 60px;
`

export const BottomLogin = styled.button`
    font-size: 18px;
    font-weight: bold;
    margin: 0;

    background-color: transparent;
    border-radius: 3px;
    padding: 5px 25px;
    border: none;

    transition: 600ms;

    :hover{
        background-color: #00C880;
        cursor: pointer;
    }
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
            font-weight: 500;
            padding: 5px 0;
            border-left-width: 2px;
            border-left-style: solid;
            border-left-color: transparent;
            transition: 500ms;

            :hover{
                cursor: pointer;
                color: #202020;
            }
        }

        >li:nth-child(2n){
            margin-right: 0;

            :hover{
                border-left-width: 2px;
                border-left-style: solid;
                border-left-color: #00C880;
            } 

            >a{
                text-decoration: none;
            }
        }
    }
`;

export const Body = styled.body`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Main = styled.main`
    width: 100%;
    max-width: 1200px;

    /* background-color: red; */
`;

export const Section = styled.section`
    width: 100%;

    display: flex;

`;

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 750px;
    max-height: 750px;

    padding: 20px 10px;
    /* background-color: red; */

`;

export const ContentTitle = styled.h1`
    font-size: 48px;
    color: #202020;

    margin-bottom: 0;
`;

export const P = styled.p`
    font-size: 24px;
`;

export const BottomApp = styled.button`

    width: 240px;
    font-size: 18px;
    font-weight: bold;
    margin: 0;

    background-color: transparent;
    border-radius: 3px;
    padding: 5px 25px;
    border: 2px solid #00C880;

    transition: 600ms;

    animation: pulse 1s infinite alternate;

    @keyframes pulse {
        0%{
            transform: scale(1);
        }
        50% {
            transform: scale(.95);
        }
        100%{
            transform: scale(1);
        }
    }

    :hover{
        background-color: #00C880;

        cursor: pointer;
    }
`;



export const ImageContentRight = styled.img`    
    max-width: 350px;

    animation: jump 1s infinite alternate;

    @keyframes jump {
        from{
            transform: translateY(15px);
        }

        to{
            transform: translateY(0);
        }
    }

`;

export const ContentRight = styled.div`
    width: 100%;
    height: 750px;
    max-height: 750px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    /* background-color: blue; */
`;

export const Footer = styled.footer`
    width: 100%;
    max-width: 1200px;
    height: 100px;
    position: absolute;
    bottom: 0;
    background-color: #00C880;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`;

export const Card = styled.div`
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;

    width: 500px;
    min-height: 80px;

    padding: 10px;

    border-radius: 3px;

    background-color: #FFFF;

    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.25);

    transition: 500ms;
    animation: scale 1s infinite alternate;

    

    :nth-child(1n){
        margin-top: 20px;
    }

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    @keyframes scale {
        from{
            transform: scale(0.95);
        }
        to{
            transform: scale(1);
        }
    }

    :nth-child(1n){
        animation-delay: 1s;
    }
    :nth-child(2n){
        animation-delay: 2s;
    }
    :nth-child(3n){
        animation-delay: 3s;
    }
`;

export const CardHeader = styled.div`

`;

export const CardBody = styled.div`
    >span{
        color: #202020;
    }
`;

export const CardTitle = styled.h1`
    margin-top: 0;
    color: #00C880;
`;