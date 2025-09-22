import { useState } from "react";

export default function NameGenerator() {

    const [random, setRandom] = useState('Clique em Gerar');

    const generate = () => {
        
        const names = [ 'João', 'Gonçalo', 'Henrique', 'Maria', 'Joana', 'Paula', 'Ana', 'Jorge', 'Miguel' ];
        const adjectives = [ 'Charmose', 'Linde', 'Tristonhe', 'Criative', 'Inteligente', 'Gulose' ];

        let nomeAleatorio = names[Math.floor(Math.random() * names.length)];
        let adjetivoAleatorio = adjectives[Math.floor(Math.random() * adjectives.length)];

        setRandom(`${nomeAleatorio} ${adjetivoAleatorio}`)

    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>Gerador de Nomes e Adjetivos</h4>
                <h1>{random}</h1>
                <button onClick={generate}>Olá</button>
            </div>
        </>
    );
};