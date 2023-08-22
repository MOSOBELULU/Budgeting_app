import { useState } from 'react'
import './App.css'
import TransactionForm from './Components/TransactionForm/TransactionForm'
import TransactionList from './Components/TransactionList/TransactionList'
// import Balance from './Components/Balance/Balance'

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const calculateTotal = (type) => {
    return transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  };

  return (
    <div className="App">
      <h1>Bugdet Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} calculateTotal={calculateTotal} />
      {/* <Balance transactions={transactions} calculateTotal={calculateTotal} /> */}
    </div>
  );
}
export default App
