import React from 'react'
import { useState,useEffect } from 'react';
import Chart from 'react-apexcharts'


function BudgetandSaving() {
    let [salaryInput,setSalaryInput] = useState(0)
    let [inputExpense,setInputExpense] = useState(0)
    function InputSalary(){
    const inputSalary = document.getElementById("inputSalary")
    salaryInput = document.getElementById("salaryInput")
    if(inputSalary !== null){
        setSalaryInput(parseInt(inputSalary.value));
        salaryInput.innerText = ` ₹${inputSalary.value}`
    }
}

function InputExpense(){
    inputExpense = document.getElementById("inputExpense")
    const expenseInput = document.getElementById("expenseInput")
    if(inputExpense !== null){
        setInputExpense(parseInt(expenseInput.value));
        inputExpense.innerText = ` ₹${expenseInput.value}`
    }
}
const chartOptions = {
    labels: ["Remaining Salary", "Expenses"],
    plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true, 
              },
              
            }
        }
    }
},
    title: {
      text: "Budget Breakdown",
      align: "center",
      style: {
        fontSize: "30px",
        color: "#333",
      },
    },
    legend: {
        position: "bottom", // Moves the labels below the chart
        horizontalAlign: "center", // Centers the labels
        fontSize: "14px",
        labels: {
          colors: "#333", // Color of the labels
        },
        margin:20,
      },
      
  };

  const chartSeries = [ (((salaryInput-inputExpense)/salaryInput)*100),((inputExpense/salaryInput)*100)];


  return (
    <div className='min-h-screen bg-gray-100 justify-items-center p-5 '>
        <div className='w-3/4 bg-white shadow-md h-full flex justify-center mx-auto rounded-t-lg p-8'>
            <div className='w-1/2 text-center text-xl'><label htmlFor="Salary"><h1  className='m-10 font-bold text-4xl text-blue-950'>This Month Salary</h1></label>
                <h1 id="salaryInput" className='w-auto h-8 m-10 font-bold'></h1>
                <input type="number" name="salaryInput" id="inputSalary" className='p-2 border rounded w-auto h-8' placeholder='Enter your Salary'/>
                <button onClick={InputSalary} className='m-4 bg-blue-600 hover:bg-blue-700 rounded text-white w-24 h-8'>Enter</button>
            </div>
            <div className='w-1/2 text-center text-xl'><label htmlFor="Expense"><h1 className='m-10 font-bold text-4xl text-blue-950'>Fixed Expenses</h1></label>
            <h1 id="inputExpense" className='w-auto h-8 m-10 font-bold'></h1>
                <input type="number" name="salaryInput" id="expenseInput" className='p-2 border rounded w-auto h-8' placeholder='Enter your Expenses'/>
                <button onClick={InputExpense} className='m-4 bg-blue-600 hover:bg-blue-700 rounded text-white w-24 h-8'>Enter</button>
            </div>

        </div>
        <div className='w-3/4 bg-white shadow-md h-full flex justify-center rounded-b-lg mx-auto p-8'>
        <Chart 
          type="donut"
          options={chartOptions}
          series={chartSeries}
          width="400"
        />
        </div>
    </div>
  )
}

export default BudgetandSaving