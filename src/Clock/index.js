import {useCurrentDate} from "./useCurrentDate";
import { Calendar } from "./styled";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Calendar>
            Dzisiaj jest {" "}
            {date.toLocaleString("pl-PL", {weekday: "long", day: "numeric", month: "long"})}
            {", "}
            {date.toLocaleTimeString()}
        </Calendar>
    )
};