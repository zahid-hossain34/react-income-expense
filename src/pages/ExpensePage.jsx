// pages/ExpensePage.js
import ExpenseForm from '../components/ExpenseForm';

const ExpensePage = () => {
  return (
    <div className=' flex justify-center items-center flex-col space-y-10 py-3'>
    <h1 className='font-mono text-2xl'>Expense Tracker </h1>
      <ExpenseForm />
    </div>
  );
};

export default ExpensePage;
