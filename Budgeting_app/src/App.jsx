import { useState } from 'react'
import './App.css'
import TransactionForm from './Components/TransactionForm/TransactionForm'
import TransactionList from './Components/TransactionList/TransactionList'
import Balance from './Components/Balance/Balance'

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions ([...transactions, transaction])
  }
  

  return (
    <>
     <TransactionForm  addTransaction={addTransaction}/> 
     <TransactionList transactions={transactions}/>
     <Balance transactions={transactions}/>
    </>
  )
}

export default App
