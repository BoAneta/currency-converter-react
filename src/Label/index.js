import "./style.css";

const Label = ({ title, input, select }) => (
    <p>
        <label className="label">
            <span className="label__title">{title}</span>
            {input}
            {select}
        </label>
    </p>
);

export default Label;