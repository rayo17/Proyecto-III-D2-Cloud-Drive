import { useContext } from "react"
import {AuthContext} from "./AutProvider"

const useAut=()=>{
    const contextValue=useContext(AuthContext)
    return contextValue; 
    
}
export default useAut;