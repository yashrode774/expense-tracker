import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../Ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredyear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  };
  let filteredExpenses = props.item.filter(
    (item) => item.date.getFullYear() == filteredYear
  );

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        {/* Expenses filter */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {/* Expenses list */}
        {expensesContent}
      </Card>
    </div>
  );
}
