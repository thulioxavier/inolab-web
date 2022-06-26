import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    background-color: ${({color}) => (color ? color : '#f0f0f5')};

    margin: auto;

    
    display: ${ ({display}) => (display)};
    justify-content: ${({justifyContent}) => (justifyContent)};
    align-items: ${({alignItems}) => (alignItems)};
    flex-direction: ${({flexDirection}) => (flexDirection)};
`;