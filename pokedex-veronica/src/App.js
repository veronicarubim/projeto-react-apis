
import { GlobalStyle } from './GlobalStyled';
import Router from './routes/Router';
import {useState} from "react"
import {MyContext} from "./provider/provider"

function App() {
  const [globalState, setGlobalState] = useState();

  return (
    <div>
      <MyContext.Provider value={{globalState, setGlobalState}}>
      <GlobalStyle/>
      <Router/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
