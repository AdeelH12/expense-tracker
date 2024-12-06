function ExpenseList ({data, deleteInput}) {

    return(

        <>
        <ul>
        {data.map((expense, index) => 
        
        <li key={index}>
            {expense.name}: £{expense.amount}
            <button className="delete-btn" onClick={() => deleteInput(index)}>Delete</button>
        </li>
        
        )}
        
        </ul>
        </>
    )
}

export default ExpenseList;