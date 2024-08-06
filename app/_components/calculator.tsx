"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import PercentageButton from "@/app/_components/percentage-button"
import CustomButton from "@/app/_components/custom-button"
import BillInput from "@/app/_components/bill-input"

const Calculator = () => {
  const [formData, setFormData] = useState({
    bill: "",
    percentage: "",
    "number-of-people": "",
  })

  const onChangeInput = (e) => {
    const { name, value } = e.target
    let valid = true

    if (name === "bill") {
      valid &= (Number.parseFloat(formData["percentage"]) > 0)
      valid &= (Number.parseInt(formData["number-of-people"]) > 0)
    } else if (name === "percentage") {
      valid &= (Number.parseFloat(formData["bill"]) > 0)
      valid &= (Number.parseInt(formData["number-of-people"]) > 0)
    } else if (name === "number-of-people") {
      valid &= (Number.parseFloat(formData["bill"]) > 0)
      valid &= (Number.parseFloat(formData["percentage"]) > 0)
    }
    setFormData({ ...formData, [name]: value })
    if (valid) doCalculation({ ...formData, [name]: value})
  }

  const doCalculation = (formData) => {
    const bill = Number.parseFloat(formData["bill"])
    const percentage = Number.parseFloat(formData["percentage"])
    const numberOfPeople = Number.parseInt(formData["number-of-people"])
    const tipTotal = bill * percentage / 100.0
    const grandTotal = bill + tipTotal

    const tipPerPerson = document.getElementById("tip-per-person")
    const billPerPerson = document.getElementById("bill-per-person")

    tipPerPerson.innerText = `$${(tipTotal / numberOfPeople).toFixed(2)}`
    billPerPerson.innerText = `$${(grandTotal/numberOfPeople).toFixed(2)}`
    return { "tip-per-person": tipTotal / numberOfPeople, "bill-per-person": grandTotal / numberOfPeople }
  }

  const onSubmitFormat = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form>
        <article className="bill-total">
          <h2>Bill</h2>
          <span className="icon" data-icon="dollar"><BillInput id="bill-input" name="bill" value={formData["bill"]} onChange={onChangeInput} /></span>
        </article>
        <article className="tip">
          <h2>Select Tip %</h2>
          <PercentageButton 
            id="percentage-5"
            name="percentage"
            value="5"  
            checked={formData["percentage"] === "5"}
            text="5%" 
            onChange={onChangeInput}
          />
          <PercentageButton id="percentage-10"
            name="percentage"
            value="10"
            checked={formData["percentage"] === "10"}
            text="10%"
            onChange={onChangeInput}
          />
          <PercentageButton id="percentage-15"
            name="percentage"
            value="15"
            checked={formData["percentage"] === "15"}
            text="15%"
            onChange={onChangeInput}
          />
          <PercentageButton id="percentage-20"
            name="percentage"
            value="20"
            checked={formData["percentage"] === "20"}
            text="20%"
            onChange={onChangeInput}
          />
          <PercentageButton id="percentage-25"
            name="percentage"
            value="25"
            checked={formData["percentage"] === "25"}
            text="25%"
            onChange={onChangeInput}
           />
          <CustomButton value="0" />
        </article>
        <article className="people">
          <h2>Number of People</h2>
          <span className="icon" data-icon="person"><input type="text" name="number-of-people" value={formData["numberOfPeople"]} onChange={onChangeInput}/></span>
        </article>
      </form>
    </>
  );
}

export default Calculator

