import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
    const [expenses, setExpenses] = useState([]);

    console.log(expenses);
    // Create function to add an expense
    const getFormData = (expenseText, expenseAmount) => {
        if (!expenseText || !expenseAmount) return;
        let id = new Date().getTime();
        setExpenses((prevExpenses) => [{ id: id, text: expenseText, amount: Number(expenseAmount) }, ...prevExpenses]);
    };

    // Create function to delete an expense
    //balance={balance} income={income} expense={expense}
    const deleteExpenses=(index)=>{
      setExpenses(expenses.filter(expense=> expense.id !== index))
    }
    return (
        <>
            <h2 className="mainHeading">Expense Tracker</h2>
            <div className="App">
                <ExpenseForm getFormData={getFormData} />
                <div className="expenseContainer">
                    <ExpenseInfo expenses={expenses} />
                    <ExpenseList expenses={expenses} deleteExpenses={deleteExpenses} />
                </div>
            </div>
        </>
    );
}

export default App;
