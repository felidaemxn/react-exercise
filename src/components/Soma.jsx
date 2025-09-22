export default function Soma(props) {

    const result = props.a + props.b

    return (
        <>
            <h1>Soma: {props.a} + {props.b}</h1>
            <h1>Resultado: {props.a + props.b}</h1>
            {/* OU */}
            <h1>Resultado2: {result}</h1> 
        </>
    )
}