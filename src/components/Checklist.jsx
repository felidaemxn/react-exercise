export default function Checklist(props) {
    return (
        <div>
            {props.items.map((item) => (
            <li key={item}>
                <label className={item.done && "line-through"}>
                    {item.text}
                </label>
            </li>
            ))}
        </div>
    );
}