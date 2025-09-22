export default function UserGreeting2(props) {

    if (props.user2.primeiro) {
        return (
            <>
                <h1>Olá, {props.user2.primeiro + ' ' + props.user2.ultimo}.</h1>
            </>
        )
    } else {
         return <h1>Olá, Anónimo.</h1>
    }
}