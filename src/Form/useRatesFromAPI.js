import { useEffect, useState } from "react";

export const useRatesFromAPI = () => {
    const [ratesFromApi, setRatesFromAPI] = useState({
        state: "loading",
        data: null,
    });

const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_vM6Sk9h5YCC3x95ULZRQgxxxQ0Exwc130Pbop0EC&currencies=EUR%2CUSD%2CCAD&base_currency=PLN"

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(apiUrl); 

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { data, meta } = response.data;

                setRatesFromAPI({
                    state: "success",
                    data,
                    meta,
                });

            } catch (error) {
                setRatesFromAPI({
                    state: "error",
                    data: null,
                });
            };
        };

        setTimeout(fetchRates, 2000);
    }, []);

    return ratesFromApi;
};