import { LayoutWrapperStyled, CardWrapperStyled } from './stylesheets/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { bool } from 'prop-types';
import Header from './components/Header/Header';
import CardDetail from './components/CardDetail/CardDetail';
import React from 'react';
import { getData } from './actions/index';
import Spinner from './components/Spinner/Spinner';
import Nodata from './components/NoData/NoData';
import { shape } from 'prop-types';
import { arrayOf } from 'prop-types';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.dataList) || [];
  const isFetching = useSelector((state) => state?.isFetching) || false;

  React.useEffect(() => {
    dispatch(getData())
  }, []);


  return (
    <LayoutWrapperStyled>
      <Header />
      <Spinner isLoading={isFetching} />
      <CardWrapperStyled>
        {data.length !== 0 && data?.map((item, idx) => (
          <CardDetail key={idx + 1} {...item} />
        ))}
      </CardWrapperStyled>
      {data.length === 0 &&  <Nodata />}

    </LayoutWrapperStyled>
  );
}

App.propTypes = {
  isFetching: bool,
  data: shape(arrayOf([]))
};

App.defaultProps = {
  isFetching: false,
  data: []
};

export default App;