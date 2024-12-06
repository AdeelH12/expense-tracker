function Expense({newAmount, newExpense, addExpense, expenseInput, addAmount}) {

    return (
    <>
    <input placeholder="Expense Name" onChange={expenseInput} value={newExpense}></input>
    <input type="number" placeholder="Amount" onChange={addAmount} value={newAmount}></input>
    
    <div>
        <button onClick={addExpense}>Add Expense</button>
    </div>
    </>
  )
}

export default Expense;