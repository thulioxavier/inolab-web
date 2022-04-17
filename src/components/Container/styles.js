import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1790px;
    min-height: 100vh;
    background-color: ${({color}) => (color ? color : '#fafafa')};

    margin: auto;

    
    display: ${ ({display}) => (display)};
    justify-content: ${({justifyContent}) => (justifyContent)};
    align-items: ${({alignItems}) => (alignItems)};
    flex-direction: ${({flexDirection}) => (flexDirection)};
`;