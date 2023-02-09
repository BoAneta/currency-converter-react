import { useState } from "react";
import { currencies } from "./currencies";
import { Result } from "../Result";
import { Clock } from "../Clock";
import { StyledButton, 
        Field, 
        StyledFieldset, 
        StyledHeader, 
        Paragraph, 
        Title, 
        Loading, 
        StyledError, 
        RatesInfo } from "./styled";
import { useRatesFromAPI } from "./useRatesFromAPI";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState("");

  const ratesFromApi = useRatesFromAPI();

  const calculateResult = (amount, currency) => {
    const rate = ratesFromApi.rates[currency];

    setResult({
      amount: +amount,
      resultValue: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <StyledHeader>
        Kalkulator walut
      </StyledHeader>
      <StyledFieldset>
        <Clock />
        {ratesFromApi.state === "loading"
          ? (
            <Loading>
              Chwileczkę... <br /> Kursy walut na dzień dzisiejszy ładują się...
            </Loading>
          ) : (
            ratesFromApi.state === "error" ? (
              <StyledError>
                Coś poszło nie tak...
              </StyledError>
            ) :
              <>
                <p>
                  <label>
                    <Title>
                      Wymieniam*:
                    </Title>
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
                    <Title>
                      Otrzymam:
                    </Title>
                    <Field
                      as="select"
                      value={currency}
                      onChange={({ target }) => setCurrency(target.value)}
                    >
                      {Object.keys(ratesFromApi.rates).map((currency => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      ))
                      )}
                    </Field>
                  </label>
                </p>
                <StyledButton>
                  Przelicz
                </StyledButton>
                <Result result={result} />
                <RatesInfo>
                  Kurs walut pobrany z NBP na dzień &nbsp; {ratesFromApi.date}
                </RatesInfo>
                <Paragraph>
                  *pole obowiązkowe
                </Paragraph></>
          )}
      </StyledFieldset>
    </form>
  )
}

export default Form;

