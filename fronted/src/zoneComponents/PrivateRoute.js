
import {Navigate,Route} from "react-router-dom"
import useAut from "../aut/useAut";
import swal from 'sweetalert'

const PrivateRoute=(props)=> {
        const user=true;
        if (!user){ swal("Hola, Para poder acceder a datos o realizar compresion de sus datos por favor ingrese los datos solicitados para iniciar sesion"); 
        return (<Navigate to="/" />)}
       
    return (
      
        <Route {...props}/>
      
    )
    }
export default PrivateRoute ;