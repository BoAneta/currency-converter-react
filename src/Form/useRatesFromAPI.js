import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesFromAPI = () => {
    const [ratesFromApi, setRatesFromAPI] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");

                setRatesFromAPI({
                    state: "working",
                    rates: response.data.rates,
                    date: response.data.date,
                });
            } catch {
                setRatesFromAPI({
                    state: "error",
                });
            };
        };
        
        setTimeout(getRates, 2000);
    }, []);

    return ratesFromApi;
};