import React, { useState } from 'react'
import Input from '../Inputs/Input'
import EmojiPickerPopup from '../layout/EmojiPickerPopup'

const AddExpenseForm = ({onAddExpense}) => {
    const [expense, setExpense] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setExpense({ ...expense, [key]: value});

  return (
    <div className="">
        <EmojiPickerPopup
            icon={expense.icon}
            onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />

        <Input 
            value={expense.category}
            onChange={({target}) => handleChange("category", target.value)}
            label="Expense Category"
            placeholder="e.g. Food, Travel"
            type="text"
        />

        <Input
            value={expense.amount}
            onChange={({target}) => handleChange("amount", target.value)}
            label="Amount"
            placeholder="e.g. 1000"
            type="number"
        />

        <Input
            value={expense.date}
            onChange={({target}) => handleChange("date", target.value)}
            label="Date"
            placeholder="Select Date"
            type="date"
        />

        <div className="flex justify-end mt-6">
            <button className="add-btn add-btn-fill" type="button" onClick={() => onAddExpense(expense)}>
                Add Expense
            </button>
        </div>
    </div>
  )
}

export default AddExpenseForm