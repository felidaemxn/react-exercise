export default function UserGreeting(props) {
    return (
        <div style={{background : "red", color: "white"}}>
            <h1>Nome: {props.user.firstName}</h1>
            <h2>Apelido: {props.user.lastName}</h2>

            <h1>Horário: {props.capibara.horario}</h1>
            <h2>Comida: {props.capibara.comida}</h2>

            {/* This is an awesome comment
            Don't forget about the term "props" here btw. It's going to be used very often */}
        </div>
    )
}