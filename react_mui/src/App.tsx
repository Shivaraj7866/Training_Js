import './App.css';
import {Stack} from "@mui/material"
import Mui_textfield from './components/Mui_textfield';
// import Button_mui from './components/Button_mui';
// import TypoGraphy from './components/TypoGraphy';

function App() {
  return (
    <Stack className="App" margin="25px">
      {/* <TypoGraphy /> */}
      {/* <Button_mui /> */}
      <Mui_textfield />
    </Stack>
  );
}

export default App;
