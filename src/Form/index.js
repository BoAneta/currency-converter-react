import "./style.css";
import { useState } from "react";
import { currencies } from "../Currencies";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ name }) =>
      name === currency.name).rate;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label className="label">
            <span className="label__title">Wymieniam*</span>
            <input
              value={amount}
              className="label__input label__input--pln"
              name="amount"
              type="number"
              min="1"
              placeholder="Podaj wartość w PLN"
              required
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <label className="label">
            <span className="label__title">Otrzymam</span>
            <input
              className="label__input label__input--disabled"
              name="amount"
              type="number"
              min="1"
              disabled
            />
            <select
              className="label__input"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.name}
                  value={currency.name}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </p>
        <button className="form__button">Przelicz</button>
        <p className="form__result"></p>
        <p className="form__paragraph">*pole obowiązkowe</p>
      </fieldset>
    </form>
  )
}

export default Form;

