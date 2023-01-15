export const Result = ({result}) => (
    <p className="form__result">
        {result !== "" && (
            <>
            Wymieniasz <strong>{result.toExchanged} PLN</strong> 
            i otrzymasz <strong>{result.toGet.toFixed(2)} {result.currency}</strong>
            </>
        )}
    </p>
)