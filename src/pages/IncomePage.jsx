// pages/IncomePage.js
import IncomeForm from '../components/IncomeForm';

const IncomePage = () => {
  return (
    <div className=' flex justify-center items-center flex-col space-y-10 py-3'>
      <h1 className='font-mono text-2xl'>Income Tracker </h1>
      <IncomeForm />
    </div>
  );
};

export default IncomePage;
