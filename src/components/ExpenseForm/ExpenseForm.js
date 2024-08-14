import { useEffect, useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const expenseTextInput = useRef();
    const expenseAmountInput = useRef();

    useEffect(() => {
        props.getFormData(text, amount);
        setText("");
        setAmount(0);
    }, [text, amount]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setText(e.target.elements.expenseText.value);
        setAmount(e.target.elements.expenseAmount.value);
        e.target.elements.expenseText.value = "";
        e.target.elements.expenseAmount.value = 0;
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <h3>Add new transaction</h3>
            <label htmlFor="expenseText">Text</label>
            <input
                id="expenseText"
                className={styles.input}
                type="text"
                placeholder="Enter text..."
                required
                ref={expenseTextInput}
            />
            <div>
                <label htmlFor="expenseAmount">Amount</label>
                <div>(negative - expense,positive-income)</div>
            </div>
            <input
                className={styles.input}
                id="expenseAmount"
                type="number"
                placeholder="Enter amount..."
                required
                ref={expenseAmountInput}
            />
            <button className={styles.submitBtn}>Add Transaction</button>
        </form>
    );
};

export default ExpenseForm;
