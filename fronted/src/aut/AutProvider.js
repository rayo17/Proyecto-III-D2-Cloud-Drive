import { createContext, useState } from "react";
export const AuthContext=createContext();
const AutProvider=({children})=>{
    const [user,setUser]=useState(null); 

    const contextValue={
        user,
    };
    return (

        <AuthContext.Provider value={contextValue}>
            {children}

        </AuthContext.Provider>
    )
     
}

export default AutProvider;