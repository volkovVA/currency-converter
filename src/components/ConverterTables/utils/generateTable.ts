export const createData = (amount: number, calculation: number) => ({
  amount,
  calculation,
});

export const generateRows = (getNumberFunction: (amount: number) => number) => {
  const amounts = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000];

  return amounts.map((amount) => createData(amount, getNumberFunction(amount)));
};

export const getBaseNumber = (num: number, conversionRate: number) => {
  return parseFloat((num * conversionRate).toFixed(3));
};

export const getTargetNumber = (num: number, conversionRate: number) => {
  return parseFloat((num / conversionRate).toFixed(3));
};
