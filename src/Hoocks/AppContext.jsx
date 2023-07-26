/* eslint-disable react/prop-types */
// AppContext.js
import  { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const getIncomeList = JSON.parse(localStorage.getItem("incomeList"));
  const getExpenseList = JSON.parse(localStorage.getItem("expenseList"));
  const [incomeList, setIncomeList] = useState(getIncomeList ? getIncomeList : []);
  const [expenseList, setExpenseList] = useState(getExpenseList ? getExpenseList : []);


  return (
    <AppContext.Provider value={{ incomeList, setIncomeList, expenseList, setExpenseList }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
