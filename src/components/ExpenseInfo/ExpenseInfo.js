import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
    // Add logic here to calculate the grand total, profit and expense amount here
    return (
        <div className={styles.expenseInfoContainer}>
            <div className={styles.balance}>
                <h4>YOUR BALANCE</h4>
                <h1>
                    $
                    {props.expenses.reduce((acc, expense) => {
                        return Number(acc + expense.amount);
                    }, 0)}
                </h1>
            </div>
            <div className={styles.incomeExpenseContainer}>
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
                        +$
                        {props.expenses
                            .filter((expense) => expense.amount > 0)
                            .reduce((acc, expense) => {
                                return Number(acc - expense.amount);
                            }, 0)}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
                        -$
                        {props.expenses
                            .filter((expense) => expense.amount < 0)
                            .reduce((acc, expense) => {
                                return Number(acc + expense.amount);
                            }, 0)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExpenseInfo;
