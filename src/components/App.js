import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCurrency from '../redux/actions';

function App() {
  const dispatch = useDispatch();
  const { currency, loading, error } = useSelector((state) => state.currency);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  console.log(currency);
  console.log(loading);
  console.log(error);

  return <div>App</div>;
}

export default App;
