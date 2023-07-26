// components/IncomeForm.js
import { useContext, useState } from "react";
import { AppContext } from "../Hoocks/AppContext";

const IncomeForm = () => {
  const { incomeList, setIncomeList } = useContext(AppContext);
  const [income, setIncome] = useState("");
  const [description, setDescription] = useState("");

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the income data to the incomeList
    const newIncome = {
      amount: income,
      description: description,
    };
    setIncomeList([...incomeList, newIncome]);
    // Clear the form after submitting
    setIncome("");
    setDescription("");
  };

  return (
    <div className="income-container">
      <div className="income-lis-container">
        <div className="income-list">
          <h2>Income List</h2>
          {incomeList.length === 0 && <p>No income added yet!</p>}
          {incomeList.length > 0 && (
            <ol>
              {incomeList.map((incomeItem, index) => (
                <li key={index}>
                  <span>Amount: {incomeItem.amount}</span>
                  <span>Description: {incomeItem.description}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
      <div className="income-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="income">Income Amount:</label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={handleIncomeChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button type="submit">Add Income</button>
        </form>
        {/* Display the income list */}
        
      </div>
    </div>
  );
};

export default IncomeForm;
