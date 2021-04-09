import React from 'react';
import { bool, string, shape } from 'prop-types';
import { CardDetailWrapperStyled, ImageWrapperStyled, ImageStyled, TitleImageStyled, InfoWrapperStyled, NameStyled, CategoryWrapperStyled, ContactWrapperStyled } from './CardDetailStylesheet';
import Status from '../Status/Status';

const CardDetail = (props) => {
    const { displayName, email, phone, avatarUrl, isOnline, categoriesCollection } = props;

    return (
        <CardDetailWrapperStyled>
            <ImageWrapperStyled>
                <ImageStyled src={avatarUrl?.url || ''} />
                <TitleImageStyled>{avatarUrl?.title || ''}</TitleImageStyled>
            </ImageWrapperStyled>
            <InfoWrapperStyled>
                <NameStyled>
                    {displayName}
                </NameStyled>
                <ContactWrapperStyled>
                    {email}
                </ContactWrapperStyled>
                <ContactWrapperStyled>
                    {phone}
                </ContactWrapperStyled>
                <CategoryWrapperStyled>
                    {categoriesCollection?.items.map((item, idx) => {
                        const { avatarUrl, displayName } = item;
                        return(
                            <div key={idx + 1}>
                                 <img src={avatarUrl?.url || ''} />
                                <TitleImageStyled isCategory>{displayName || ''}</TitleImageStyled>
                            </div>
                        )
                    })}
                </CategoryWrapperStyled>
            </InfoWrapperStyled>
            <Status isOnline={isOnline} />
        </CardDetailWrapperStyled>
    )
}

CardDetail.propTypes = {
    displayName: string.isRequired, 
    email: string,
    phone: string, 
    avatarUrl: shape({}), 
    isOnline: bool.isRequired 
};

CardDetail.defaultProps = {
   phone: '',
   avatarUrl: shape({}),
   email: '',
};

export default CardDetail;