import { bool } from "prop-types";
import React from "react";
import { StatusWrapperStyled, ButtonStyled, StatusStyled } from './StatusStyleSheet';

export default function Status({ isOnline}) {

  return (
    <StatusWrapperStyled>
        <ButtonStyled>
            <button className={isOnline ? 'enable' : 'disable'} type="button">
                <span className="pin" />
            </button>
            {isOnline ? <StatusStyled>Online</StatusStyled> : <StatusStyled>Offline</StatusStyled>}
        </ButtonStyled>
  </StatusWrapperStyled>
  );
}

Status.propTypes = {
  isOnline: bool.isRequired 
};

Status.defaultProps = {};