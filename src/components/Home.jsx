// components/HomePage.js
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../Hoocks/AppContext";

const Home = () => {
  const { incomeList, expenseList } = useContext(AppContext);

  // Keep track of the latest income and expense items in local state
  const [latestIncomeList, setLatestIncomeList] = useState([]);
  const [latestExpenseList, setLatestExpenseList] = useState([]);

  // Sort the income and expense items based on their dates
  useEffect(() => {
    const sortedIncomeList = [...incomeList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const sortedExpenseList = [...expenseList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Get the last 5 items from the sorted arrays
    setLatestIncomeList(sortedIncomeList.slice(0, 5));
    setLatestExpenseList(sortedExpenseList.slice(0, 5));
  }, [incomeList, expenseList]);

  return (
    <div className="w-full flex justify-center items-center flex-col pt-4 space-y-10">
      <h2>All Income and Expense </h2>
      {/* Display the last 5 income items */}
      <div className="w-full grid grid-cols-2 space-x-4">
        <div className="flex bg-cyan-50 rounded-md  shadow-md  flex-col space-y-4 p-4 ">
          <h2 className="flex justify-center">Last 5 Income</h2>
          <div className="w-full bg-gray-400 h-[1px]"></div>

          {latestIncomeList.length > 0 ? (
            <ul className=" w-full flex flex-col  justify-start space-y-5  ">
              {latestIncomeList.map((incomeItem, index) => (
                <li
                  className=" bg-white gap-2  p-4 shadow-md rounded-md w-full flex justify-between item-center  "
                  key={index}
                >
                  <div className="flex flex-col space-y-2">
                    <p className=" font-mono">Amount: {incomeItem.amount}</p>
                    <p className="font-mono">
                      Description: {incomeItem.description}
                    </p>
                  </div>
                  <div className="flex justify-center  items-center">
                    <p className="font-mono">{incomeItem.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className=" flex justify-center text-red-400 ">
              No Income added yet!
            </p>
          )}
        </div>
        {/* Display the last 5 expense items */}
        <div className=" bg-teal-50 rounded-md shadow-md flex flex-col space-y-4 p-4">
          <h2 className="flex justify-center">Last 5 Expense</h2>
          <div className="w-full bg-gray-400 h-[1px]"></div>

          {latestExpenseList.length > 0 ? (
            <ul className=" w-full flex flex-col  justify-start space-y-5  ">
              {latestExpenseList.map((expenseItem, index) => (
                <li
                  className=" bg-white gap-2  p-4 shadow-md rounded-md w-full flex justify-between item-center  "
                  key={index}
                >
                  <div className="flex flex-col space-y-2">
                    <p className=" font-mono">Amount: {expenseItem.amount}</p>
                    <p className="font-mono">
                      Description: {expenseItem.description}
                    </p>
                  </div>
                  <div className="flex justify-center  items-center">
                    <p className="font-mono">{expenseItem.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="flex justify-center text-rose-400">
              No Expense added yet!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
