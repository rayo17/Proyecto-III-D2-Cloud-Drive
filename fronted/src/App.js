


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as R, Route, Routes } from "react-router-dom";

import Navigation from "./zoneComponents/navigate";
import CreateUsers from './zoneComponents/createUsers';
import Inicio from "./zoneComponents/inicio";
import Compression from "./zoneComponents/Compression";
import PrivateRoute from "./zoneComponents/PrivateRoute";
import AutProvider from "./aut/AutProvider";
import Cuenta from "./zoneComponents/Cuenta";
function App() {
  return (
    
        <R>
          <Navigation />
       
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/createUsers" element={<CreateUsers />} />
              <Route
                exact
                path="/compresion/:id"
                element={
                  
                    <Compression />
                  
                }
              />
              <Route path= "/cuenta" element={<Cuenta /> }/>

            </Routes>
         
        </R>
   
  );
}

export default App;
