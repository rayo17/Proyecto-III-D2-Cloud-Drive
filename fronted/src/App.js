


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
    <div>
      <AutProvider>
        <R>
          <Navigation />
          <div>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/createUsers" element={<CreateUsers />} />
              <Route
                exact
                path="/compresion"
                element={
                  <PrivateRoute>
                    <Compression/>
                  </PrivateRoute>
                }
              />
              <Route path= "/cuenta" element={<PrivateRoute> <Cuenta/> </PrivateRoute>}/>

            </Routes>
          </div>
        </R>
      </AutProvider>
    </div>
  );
}

export default App;
