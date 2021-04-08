import styled from 'styled-components';

export const StatusWrapperStyled = styled.div`
  display: flex;
  margin-bottom: 10px;
  > span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ButtonStyled = styled.div`
  button {
    margin-left: 0;
    border: 0;
    border-radius: 25px;
    height: 15px;
    width: 35px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: flex;
    justify-content: flex-start;
    position: relative;
  }
  button:focus,
  button:active {
    outline: none;
  }
  button::-moz-focus-inner {
    border: 0;
  }
  .pin {
    background-color: white;
    border-radius: 19px;
    height: 13px;
    left: 2px;
    position: absolute;
    top: 1px;
    width: 13px;
    transition: left ease 0.5s;
  }
  .enable {
    background-color: #4AC0A4;
  }
  .enable .pin {
    left: 20px;
  }
`;

export const StatusStyled = styled.h6`
    margin-block-start: 0.33em;
    margin-block-end: 0.33em;  
`;