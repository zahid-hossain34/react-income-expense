/* eslint-disable react/prop-types */
// AppContext.js
import  { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  return (
    <AppContext.Provider value={{ incomeList, setIncomeList, expenseList, setExpenseList }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
