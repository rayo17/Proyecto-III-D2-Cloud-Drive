


import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as R,Route, Routes } from "react-router-dom";

import Navigation from "./zoneComponents/navigate";
import CreateUsers from './zoneComponents/createUsers';
import Inicio from "./zoneComponents/inicio";

function App() {
  return (
    <R>
      <Navigation/>
      <div className="container-sm" >
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/createUsers"element={<CreateUsers/>}/>
      </Routes>
      </div>
    </R>
  );
}

export default App;
