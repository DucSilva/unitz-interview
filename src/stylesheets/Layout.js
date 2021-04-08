import styled from 'styled-components';

export const LayoutWrapperStyled = styled.div`
    padding: 10px;
    width: 80%;
    margin: auto;
    position: relative;
`;

export const LoadingWrapperStyled = styled.i`
    z-index: 999;
    position: absolute;
    top: 50px;
    left: 50px;
    color: red;
    width: 100px;
    height: auto;
`;

export const CardWrapperStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    justify-content: center;
    margin: 20px 0;
`;