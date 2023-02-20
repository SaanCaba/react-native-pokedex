import React, { useState, createContext } from "react";


export interface Props {
  children: React.ReactNode;
}

type ContextType = {
  config: AuthUser | null,
  setConfig: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export type AuthUser = {
  username?: string,
  password?:string,
  token?:string
}
export const Context = createContext<ContextType | null>(null);


export function ContextProvider({ children }: Props) {
  const[config, setConfig] = useState<AuthUser | null>(null)

    return(
        <Context.Provider value={{config,setConfig}} >
          {children}
        </Context.Provider>
    )
}
