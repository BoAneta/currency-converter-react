import { useState } from "react";
import { currencies } from "./currencies";
import { Result } from "../Result";
import { Clock } from "../Clock";
import { StyledButton, Field, StyledFieldset, StyledHeader, Paragraph, Title } from "./styled";

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
    <form onSubmit={onFormSubmit}>
      <StyledHeader>Kalkulator walut</StyledHeader>
      <StyledFieldset>
        <Clock />
        <p>
          <label>
            <Title>Wymieniam*:</Title>
            <Field
              value={amount}
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
          <label>
            <Title>Otrzymam:</Title>
            <Field 
              as="select"
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
            </Field>
          </label>
        </p>
        <StyledButton>Przelicz</StyledButton>
        <Result result={result}/>
        <Paragraph>*pole obowiązkowe</Paragraph>
      </StyledFieldset>
    </form>
  )
}

export default Form;

