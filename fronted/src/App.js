


import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as R,Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from "./zoneComponents/navigate";
import CreateUsers from './zoneComponents/createUsers';

function App() {
  return (
    <R>
      <Navigation/>
      <Routes>
      <Route path="/createUsers"element={<CreateUsers/>}/>
  
      </Routes>
    </R>
  );
}

export default App;
