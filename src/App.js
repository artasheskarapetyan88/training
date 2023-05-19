import './App.css';
import Login from "./pages/loginPage/Login";
import Dialogues from "./pages/dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRout from "./routs/ProtectedRouts";
import Tairning from "./pages/Tairning";
import Test from "./pages/test/Test";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRout/>}>
            <Route path="/dialogues" element={ <Dialogues/> }/>
            <Route path="/people" element={ <Tairning/> }/>
            <Route path="/test" element={ <Test/> }/>
          </Route>
          <Route path="/" element={<Login/>}/>
        </Routes>

        </BrowserRouter>

  );
}

export default App;
