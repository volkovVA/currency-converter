import React, { useState } from 'react';
import CurrencyAmount from '../CurrencyAmount/CurrencyAmount';
import AutocompleteContainer from '../CurrencyAutocomplete/AutocompleteContainer';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import CurrencyOutput from '../CurrencyOutput/CurrencyOutput';

function CurrencyBox() {
  const [base, setBase] = useState('');
  const [target, setTarget] = useState('');
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div style={{ marginTop: '10px' }}>
      <CurrencyAmount symbol={symbol} setAmount={setAmount} />
      <AutocompleteContainer
        setSymbol={setSymbol}
        setBase={setBase}
        setTarget={setTarget}
      />
      <CurrencyButton base={base} target={target} amount={amount} />
      <CurrencyOutput />
    </div>
  );
}

export default CurrencyBox;
