import { useState } from "react";

export default function Gerador() {

    const [randomNumber, setRandomNumber] = useState(0);

    const handleRandom = () => {
        const numeroAleatorio = Math.floor(Math.random() * 1000 + 1);

        setRandomNumber(numeroAleatorio)
    };

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>Gerador de Números</h4>
                <button onClick={handleRandom}>Gerar</button>
                <h1>{randomNumber === 0 ? "Clique em Gerar" : randomNumber}</h1>
            </div>
        </>
    );
}