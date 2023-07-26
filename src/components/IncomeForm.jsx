// components/IncomeForm.js
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Hoocks/AppContext";

const IncomeForm = () => {
  const { incomeList, setIncomeList } = useContext(AppContext);
  const [income, setIncome] = useState("");
  const [description, setDescription] = useState("");
  const [amountError, setAmountError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dateError, setDateError] = useState("");
  const [date, setDate] = useState("");

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDateChange = (e) => {
    const enteredDate = e.target.value;
    // Date validation
    const isValidDate = new Date(enteredDate).toString() !== "Invalid Date";
    setDate(enteredDate);
    if (!isValidDate) {
      setDateError("Please enter a valid date.");
    } else {
      setDateError("");
    }
  };
const handleClick = () =>{
  localStorage.clear();
  setIncomeList([]);
}
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the income data to the incomeList
    if (!date.trim()) {
      setDateError("Please enter a valid date.");
      return;
    } else if (!income.trim() || income < 0) {
      setDateError("");
      setAmountError("Please enter  description");
      return;
    } else if (!description.trim()) {
      setAmountError("");
      setDateError("");
      setDescriptionError("Please enter  description");
      return;
    }

    const newIncome = {
      amount: income,
      description: description,
      date: date,
    };
    setIncomeList([...incomeList, newIncome]);
  
    // Clear the form after submitting
    setAmountError("");
    setDescriptionError("");
    setDate("");
    setIncome("");
    setDescription("");
  };
  useEffect(() =>{
    localStorage.setItem("incomeList", JSON.stringify(incomeList));
  }, [incomeList])

  return (
    <div className=" w-full grid grid-cols-2  ">
      <div className=" bg-white p-4 rounded-tl-md rounded-bl-md  ">
        <div className="income-list">
         <div className=" flex justify-between "> <h2 className="text-black text-xl ">
            Income List
          </h2>
         { incomeList.length > 0 ?  <button className="p-1 text-sm px-2 shadow-md bg-red-500 text-white flex items-center justify-center rounded-lg" onClick={handleClick} >Clear</button> : ''}</div>
          <div className="w-full bg-gray-500 h-[1px]"></div>
          {incomeList.length === 0 && (
            <p className=" flex justify-center items-center text-rose-500 pt-4 font-mono">No income added yet!</p>
          )}
          {incomeList.length > 0 && (
            <ol className=" w-full flex flex-col justify-start space-y-5  ">
              {incomeList.map((incomeItem, index) => (
                <li className="  " key={index}>
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
            </ol>
          )}
        </div>
      </div>
      <div className=" flex justify-center bg-teal-100  rounded-tr-md  rounded- ">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <p className="text-sm font-mono mb-2 mt-1 text-red-500">
            {dateError}
          </p>
          <div>
            <label className="font-mono" htmlFor="income">
              Income Amount:
            </label>
            <input
              placeholder="Enter amount"
              type="number"
              id="income"
              value={income}
              onChange={handleIncomeChange}
            />
          </div>
          <p className="text-sm font-mono mb-2 mt-1 text-red-500">
            {amountError}
          </p>
          <div>
            <label className="font-mono" htmlFor="description">
              Description:
            </label>
            <input
              placeholder="Enter description"
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <p className="text-sm font-mono text-red-500">{descriptionError}</p>
          <button
            className=" mt-4  px-4 rounded-md mb-4 py-2 bg-teal-600 text-white font-mono hover:bg-teal-500"
            type="submit"
          >
            Add Income
          </button>
        </form>
        {/* Display the income list */}
      </div>
    </div>
  );
};

export default IncomeForm;
