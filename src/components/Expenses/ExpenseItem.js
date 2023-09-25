import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./ExpenseItem.css";
import React, { useState } from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
}
