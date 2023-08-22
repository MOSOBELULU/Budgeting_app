/*eslint-disable*/


const Balance = ({ transactions }) => {
  const calculateTotal = (type) => {
    return transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  };

  const totalIncome = calculateTotal('income');
  const totalExpenses = calculateTotal('expense');
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Balance</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Balance;






