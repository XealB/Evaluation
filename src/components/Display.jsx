import React from "react";
import { DepenseProvider } from "../context/depenseContext";
import AddDepense from "./addDepense"
import TotalDepense from "./totalDepense";
import ListeDepense from "./ListeDepense";

const Display = () => {

    return(
        
        <DepenseProvider>
            <AddDepense />
            <ListeDepense />
            <TotalDepense />
        </DepenseProvider>
        
    )
}

export default Display