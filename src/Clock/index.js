import { useCurrentDate } from "./useCurrentDate";
import { Calendar } from "./styled";

export const Clock = () => {
    const date = useCurrentDate();

    const formatedDate = (date) => {

        return `${date.toLocaleString("pl-PL",
            { weekday: "long", day: "numeric", month: "long" })}
        ${", "}
        ${date.toLocaleTimeString()}`
    };


    return (
        <Calendar>
            Dzisiaj jest {" "}
            {formatedDate(date)}
        </Calendar>
    )
};