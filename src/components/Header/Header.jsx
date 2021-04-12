import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bool, string } from 'prop-types';
import { HeaderTitle, SortWrapperStyled, TextStyled, SortItemStyled, SortStyled } from './HeaderStyleSheet';
import Dropdown from '../Dropdown/Dropdown';
import { FILTER_STATUS } from '../../utils/ENUM';
import { filterByName, filterByStatus, clearStatus, getData } from '../../actions/index';
import useDebounce from '../../hook/useDebounce';
const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isFilterStatus, setIsFilterStatus] = React.useState(false);

    const radioStatus = useSelector((state) => state?.radioStatus) || 0;

    const debouncedSearchTerm = useDebounce(searchTerm, 500); 
    React.useEffect(() => {
        if(debouncedSearchTerm) dispatch(filterByName({payload: debouncedSearchTerm}));
    }, [debouncedSearchTerm])

    React.useEffect(() => {
        if(debouncedSearchTerm === '') dispatch(getData()); // fix bug not search if clear input field
    }, [debouncedSearchTerm])

    const handleFilterStatus = () => {
        setIsFilterStatus(pStatus => !pStatus);
    }

    const handleClickStatus = (value) => {
        dispatch(filterByStatus(value))
        setSearchTerm('')
    }

    const handleClearSort = (e) => {
        e.stopPropagation();
        dispatch(clearStatus());
    }

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    } 

    const renderStatus = () => {
        switch (radioStatus) {
            case 1: {
                return (
                    <div className="distance">
                        Online <span onClick={(e) => handleClearSort(e)}>x</span>
                    </div>
                )
            }

            case 2: {
                return (
                    <div className="distance">
                        Offline <span onClick={(e) => handleClearSort(e)}>x</span>
                    </div>
                )
            }


            default: {
                return (
                    <div>
                        Status
                    </div>
                )
            }
        }
    }

    const handleClearSearch = () => {
        setSearchTerm('');
        dispatch(getData())
    }

    return (
        <>
            <HeaderTitle>
                Danh sách các cố vấn
            </HeaderTitle>
            <SortWrapperStyled>
                <SortStyled>
                    <TextStyled isFilter>
                        Lọc kết quả
                    </TextStyled>

                    <SortItemStyled onClick={() => handleFilterStatus()} isStatus={isFilterStatus}>
                        {renderStatus()}
                        <Dropdown visible={isFilterStatus} data={FILTER_STATUS} onClick={(e) => handleClickStatus(e)} value={radioStatus} />
                    </SortItemStyled>
                </SortStyled>
                <SortStyled isSearch>
                    <input placeholder="Search..."  type="text" value={searchTerm} onChange={(e) => handleSearchTerm(e)}/>
                    {searchTerm.length !== 0 && <span onClick={handleClearSearch}>x</span>}
                </SortStyled>
            </SortWrapperStyled>
        </>
    )
}

Header.propTypes = {
    isFilterStatus: bool,
    searchTerm: string,
  };
  
  Header.defaultProps = {
    isFilterStatus: false,
    searchTerm: ''
  };

export default Header;