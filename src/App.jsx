import { useState } from 'react'
import './App.css'
import Expense from './Expense'
import ExpenseList from './ExpenseList';

function App() {

  const [expense, setExpense] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [newAmount, setNewAmount] = useState('');


  const deleteInput = (index) => {

    setExpense((e) => e.filter((_, i) => i !== index));
  

}
  const amountInput = (e) => {

    setNewAmount(e.target.value);

  }
  const expenseInput = (e) => {

    setNewExpense(e.target.value);


  }
  const addExpense = () => {
    if (newExpense === '' || newAmount === '') {
      alert("Please enter both an expense and an amount.");
      return;
    }
  
    setExpense(prev => [
      ...prev,
      { name: newExpense, amount: newAmount }
    ]);
    setNewExpense('');
    setNewAmount('');
  };
  

  return (
    <>
      <h1>Expense Tracker</h1>
      <Expense addExpense={addExpense} expenseInput={expenseInput} addAmount={amountInput} newExpense={newExpense} newAmount={newAmount}/>
      <ExpenseList deleteInput={deleteInput} data={expense} />
    </>
  )
}

export default App
