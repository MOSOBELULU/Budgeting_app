/*eslint-disable*/

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <p key={index}>
            <strong>{transaction.type === 'income' ? '+ ' : '- '}</strong>
            {transaction.amount} {transaction.description}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
