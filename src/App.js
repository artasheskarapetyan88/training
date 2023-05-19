import './App.css';
import Login from "./pages/login/Login";
import Trainings from "./pages/trainings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRout from "./routs/ProtectedRouts";
import People from "./pages/people";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRout/>}>
            <Route path="/trainings" element={ <Trainings/> }/>
            <Route path="/people" element={ <People/> }/>
          </Route>
          <Route path="/" element={<Login/>}/>
        </Routes>

        </BrowserRouter>

  );
}

export default App;
