// components/ExpenseForm.js
import  { useContext, useState } from 'react';
import { AppContext } from '../Hoocks/AppContext';

const ExpenseForm = () => {
  const { expenseList, setExpenseList } = useContext(AppContext);
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the expense data to the expenseList
    const newExpense = {
      amount: expense,
      description: description,
    };
    setExpenseList([...expenseList, newExpense]);
    // Clear the form after submitting
    setExpense('');
    setDescription('');
  };

  return (
    <div className='income-content'>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expense">Expense Amount:</label>
          <input type="number" id="expense" value={expense} onChange={handleExpenseChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      {/* Display the expense list */}
      <div className='income-list'>
        <h2>Expense List</h2>
        {expenseList.length === 0 ? <p>No expense added yet!</p> : <ol>
          {expenseList.map((expenseItem, index) => (
            <li key={index}>
              <span> Amount: {expenseItem.amount}</span>
              <span> Description: {expenseItem.description}</span>
             
              
            </li>
          ))}
        </ol>}
        
      </div>
    </div>
  );
};

export default ExpenseForm;
