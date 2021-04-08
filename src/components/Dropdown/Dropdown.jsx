import React from 'react';
import { bool, number, shape, arrayOf, func } from 'prop-types';
import { DropdownWrapperStyled, LiWrapperStyled } from './DropdownStyleSheet';

const Dropdown = ({ visible, data, onClick, value }) => {
    const onClickItem = (item) => {
        onClick(item);
    }

    return (
        <DropdownWrapperStyled visible={visible}>
            {data.map(item => {
                return <LiWrapperStyled key={item?.id || 0} value={item?.value || 0} onClick={() => onClickItem(item?.value)}>
                    <input type="radio" checked={ item?.value === value} />
                    <span>{item?.name}</span>
                </LiWrapperStyled>
            })}
        </DropdownWrapperStyled>
    )
}

Dropdown.propTypes = {
    visible: bool.isRequired, 
    data: shape(arrayOf([])).isRequired, 
    onClick: func, 
    value: number.isRequired
};

Dropdown.defaultProps = {
   onClick: () => {}
};

export default Dropdown;