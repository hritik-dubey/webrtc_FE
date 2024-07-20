import SocketIoClient from "socket.io-client";
import React, { createContext } from "react";

const ws_server = "http://localhost:5050";

const SocketContext = createContext<any|null>(null)

const socket  =  SocketIoClient(ws_server)

interface Props{
    children:React.ReactNode
}

export const ScoketProvider:React.FC<Props> = ({children})=>{
    return(
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}