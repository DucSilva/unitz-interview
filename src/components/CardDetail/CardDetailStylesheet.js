import styled from 'styled-components';

export const CardDetailWrapperStyled = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 1px #4AC0A4;
    margin: 10px;
`;

export const ImageWrapperStyled = styled.div`
    text-align: center;
    max-width: 100px;
    overflow: hidden;
`;
export const TitleImageStyled= styled.div`
    font-size: ${(props) => props.isCategory ? '10px': '12px'};
`;

export const ImageStyled = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;

export const InfoWrapperStyled = styled.div`
    display: block;
    margin-left: 10px;
    flex: 1;
`;

export const NameStyled = styled.h4`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
    font-weight: bold;
    text-transform: capitalize;
`;

export const StarStyled = styled.div`
    display: flex;
    > div {
        > span {
            margin-right: 2px;
        }
        .checked{
            color: orange;
        }
        .total-patient {
            font-size: 15px;
            margin-left: 10px;
        }
    }
`;

export const ContactWrapperStyled = styled.h6`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CategoryWrapperStyled = styled.div`
    display: flex;
    text-align: center;
    margin: 5px;
    overflow: hidden;
    > div{
        width: 50px;
        overflow: hidden;
        img{
            width: 40px;
            height: 40px;
            border-radius: 5px;
        }
    }
`;