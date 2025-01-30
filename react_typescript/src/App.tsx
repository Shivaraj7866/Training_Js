import "./App.css";
import AdvancProp from "./components/AdvancProp";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';

function App() {
  // const Pname={
  //   first:"mitchel",
  //   last:"marsh"
  // }

  // const pList=[
  //   {
  //     first:"Steve",
  //     last:"Smith"
  //   },
  //   {
  //     first:"Virat",
  //     last:"Kohli"
  //   },
  //   {
  //     first:"Ravindra",
  //     last:"Jadeja"
  //   }
  // ]

  return (
    <div className="App">
      <Greet name="shivaraj" courseCount={5} isLoggedIn={true} />
     {/* <Person name={Pname} /> */}
     {/* <PersonList names={pList}/> */}
      <AdvancProp status="loading" />
      <Heading>hi,...Chindren how are you?....</Heading>
      <Oscar>
        <Heading>hello mava etlunnav???</Heading>
      </Oscar>
    </div>
  );
}

export default App;
