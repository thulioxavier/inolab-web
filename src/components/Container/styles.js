import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1790px;
    height: 100vh;
    background-color: ${({color}) => (color ? color : 'transparent')};

    margin: auto;

    
    display: ${ ({display}) => (display)};
    justify-content: ${({justifyContent}) => (justifyContent)};
    align-items: ${({alignItems}) => (alignItems)};
    flex-direction: ${({flexDirection}) => (flexDirection)};
`;