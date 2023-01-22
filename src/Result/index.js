export const Result = ({result}) => (
    <p className="form__result">
        {result !== "" && (
            <>
            Wymieniasz <strong>{result.amount} PLN</strong>&nbsp; 
            i otrzymasz <strong>{result.resultValue.toFixed(2)} {result.currency}</strong>
            </>
        )}
    </p>
)