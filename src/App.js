import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Mobile Phone",
    amount: 16000,
    date: new Date(2023,1,1),
  },
  { id: "e2", title: "Sony TV", amount:50000, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 5000,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Car",
    amount: 450000,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e5",
    title: "Health Insurance",
    amount: 5000,
    date: new Date(2023,1,1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
