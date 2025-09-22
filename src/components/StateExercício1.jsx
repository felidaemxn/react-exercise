import { useState } from "react";

export default function StateExercício1() {

    const [contador, setContador] = useState(0)

    const handleCount = () => {
        setContador((prev) => prev + 1)
    };

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>Contador</h4>
                <h1>{contador}</h1>
                <button onClick={handleCount}>Contar</button>
            </div>
        </>
    );
}