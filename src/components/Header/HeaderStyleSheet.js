import styled, { css } from 'styled-components';

export const HeaderTitle = styled.h1`
    color: #333333;
    text-align: center;
`;

export const SortWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    margin: 0 10px;
`;

export const SortStyled = styled.div`
    display: flex;
    align-items: center;
    position: ${({isSearch}) => (isSearch && 'relative')};
    > input {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #4AC0A4;
        &:focus {
            outline: none;
        }
    }
    > span {
        position: absolute;
        right: 5px;
        color: #4AC0A4;
        cursor: pointer;
    }
`;

export const TextStyled = styled.h4`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
    text-align: ${({ isFilter }) => (isFilter && 'end')};
    margin-right: 10px;
`;

export const SortItemStyled = styled.div`
    display: ${(props) => (props.isSort || props.isStatus) ? 'block' : 'flex'};
    justify-content: center;
    align-items: center;
    position: relative;
    > div {
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid #4AC0A4;
        cursor: pointer;
        ${(props) =>
        (props.isSort || props.isStatus) &&
        css`
              display: flex;
              justify-content: center;
            
            `};
    }
    .distance{
        background-color: #4AC0A4;
        color: white;
        border: none;
    }
`;
