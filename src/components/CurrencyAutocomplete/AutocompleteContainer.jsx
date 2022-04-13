import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from '../../redux/actions';

import AutocompleteBase from './AutocompleteBase';
import AutocompleteTarget from './AutocompleteTarget';

const AutocompleteContainer = ({ setSymbol, setBase, setTarget }) => {
  const dispatch = useDispatch();
  const { currencySupported, loadingCurrency } = useSelector(
    (state) => state.currency
  );

  useEffect(() => {
    if (!currencySupported) {
      dispatch(fetchCurrency());
    }
  }, [currencySupported, dispatch]);

  if (loadingCurrency) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <AutocompleteBase
        currency={currencySupported}
        setSymbol={setSymbol}
        setBase={setBase}
      />
      <AutocompleteTarget currency={currencySupported} setTarget={setTarget} />
    </div>
  );
};

export default AutocompleteContainer;
