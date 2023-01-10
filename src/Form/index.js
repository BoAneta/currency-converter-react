import "./style.css";
import Label from "../Label";
import Result from "../Result";
import { useState } from "react";

const Form = ({ title, input, select }) => {

  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <Label
                title="Wymieniam*"
                input={
                    <input
                        value={amount}
                        className="label__input label__input--pln"
                        name="amount"
                        type="number"
                        min="1"
                        placeholder="Podaj wartość w PLN"
                        required
                        onChange={({target}) => setAmount(target.value)}
                    />
                }
            />
            <Label
                title="Otrzymam"
                input={
                    <input
                        className="label__input label__input--disabled"
                        name="amount"
                        type="number"
                        min="1"
                        disabled
                    />
                }
                select={
                    <select className="label__input">
                        <option value="USD">$</option>
                        <option value="€">€</option>
                        <option value="NOK">NOK</option>
                    </select>
                }
            />

            <button className="form__button">Przelicz</button>
            <Result />
            <p className="form__paragraph">*pole obowiązkowe</p>
        </fieldset>
    </form>);
}

export default Form;

