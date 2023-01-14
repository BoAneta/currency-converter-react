export const Result = ({result, amount, currency}) => (
    <p className="form__result">
        {result !== "" && (
            <>
            Wymieniasz <strong>{+amount} PLN</strong> i otrzymasz <strong>{result.toFixed(2)} {currency}</strong>
            </>
        )}
    </p>
)