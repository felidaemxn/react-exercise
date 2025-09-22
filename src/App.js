import NameGenerator from "./components/NameGenerator";
import StateExercício1 from "./components/StateExercício1";
import Gerador from "./components/Gerador";
import Checklist from "./components/Checklist";
import UserGreeting2 from "./components/UserGreeting2";
import Soma from "./components/Soma";
import UserGreeting from "./components/UserGreeting";
/* 
const user = {
  firstName: 'Alberto',
  lastName: 'Menezes'
};

const capibara = {
  horario: '10:00',
  comida: 'Torta de atum',
}

const user2 = {
  primeiro: 'Alberto',
  ultimo: 'Menezes'
};
*/

function App() {
  return (
    <div className="App">
      {/* <h1>Hello, World!</h1>
      <UserGreeting
        user={user}
        capibara={capibara} />
      <Soma
        a={1}
        b={4} /> 
      <UserGreeting2
        user2={user2} />
      <ul>
        <Checklist
          items={[
            { text: 'Tarefa Um', done: true },
            { text: 'Tarefa Dois', done: true }
          ]}
        />
      </ul>
      <StateExercício1 />
      <Gerador /> */}
      <NameGenerator />
    </div>
  );
}

export default App;
