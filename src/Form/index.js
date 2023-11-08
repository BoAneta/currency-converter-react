import { useEffect, useState } from "react";
import { Result } from "../Result";
import { Clock } from "../Clock";
import {
  StyledButton,
  Field,
  StyledFieldset,
  StyledHeader,
  Paragraph,
  Title,
  Loading,
  StyledError,
  RatesInfo
} from "./styled";
import { useRatesFromAPI } from "./useRatesFromAPI";

const defaultCurrency = "USD";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(defaultCurrency);
  const [result, setResult] = useState("");

  const ratesFromApi = useRatesFromAPI();

  const calculateResult = (amount, currency) => {
    const rate = ratesFromApi.data[currency].value;

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

  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    setMyDate(new Date(!!ratesFromApi.meta && ratesFromApi.meta.last_updated_at));
  }, [ratesFromApi]);

  const formattedTime = myDate.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

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
              Chwileczkę... <br /> ⏳<br /> Kursy walut na dzień dzisiejszy ładują się...
            </Loading>
          ) : (
            ratesFromApi.state === "error" ? (
              <StyledError>
                Coś poszło nie tak 🤷... <br /> Sprawdź połączenie z internetem lub spróbuj później.
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
                      step="0.01"
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
                      {Object.keys(ratesFromApi.data).map((currency => (
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
                  Kurs walut pobrany z NBP na dzień &nbsp;{formattedTime}
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

