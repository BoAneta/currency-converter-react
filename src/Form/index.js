import "./style.css";
import { useState } from "react";
import { currencies } from "../Currencies";
import { Result } from "../Result";
import { Clock } from "../Clock";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ name }) => name === currency).rate;

    setResult({
      amount: +amount,
      resultValue: amount / rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1 className="header">Kalkulator walut</h1>
      <fieldset className="form__fieldset">
        <Clock />
        <p>
          <label className="label">
            <span className="label__title">Wymieniam*:</span>
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
            <span className="label__title">Otrzymam:</span>
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
        <Result result={result}/>
        <p className="form__paragraph">*pole obowiązkowe</p>
      </fieldset>
    </form>
  )
}

export default Form;

