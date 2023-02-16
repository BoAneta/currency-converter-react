import { useCurrentDate } from "./useCurrentDate";
import { Calendar } from "./styled";

export const Clock = () => {
    const date = useCurrentDate();

    const formatedDate = (date) => date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    ;


    return (
        <Calendar>
            Dzisiaj jest
            {" "}
            {formatedDate(date)}
        </Calendar>
    )
};