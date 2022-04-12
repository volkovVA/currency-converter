import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCurrency from '../../redux/actions';
import CurrencyAutocompleteMain from '../CurrencyAutocomplete/CurrencyAutocompleteMain';
import CurrencyAutocompleteSecond from '../CurrencyAutocomplete/CurrencyAutocompleteSecond';

function CurrencyBox() {
  const dispatch = useDispatch();
  const { currency, loading } = useSelector((state) => state.currency);

  useEffect(() => {
    if (!currency) {
      dispatch(fetchCurrency());
    }
  }, [currency, dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <CurrencyAutocompleteMain details={currency.details} />
      <CurrencyAutocompleteSecond details={currency.details} />
    </div>
  );
}

export default CurrencyBox;
