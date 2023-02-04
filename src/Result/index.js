import { StyledResult } from "./styled";

export const Result = ({result}) => (
    <StyledResult>
        {result !== "" && (
            <>
                Wymieniasz <strong>{result.amount} PLN</strong>&nbsp; 
                i otrzymasz <strong>{result.resultValue.toFixed(2)} {result.currency}</strong>
            </>
        )}
    </StyledResult>
);