import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = (props) => {
    return (
        <div className={styles.expenseListContainer}>
            <h3>Transactions</h3>
            <ul className={styles.transactionList}>
                {props.expenses.map((tr) => (
                    <Transaction expense={tr} index={tr.id} deleteExpense={props.deleteExpenses} />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
