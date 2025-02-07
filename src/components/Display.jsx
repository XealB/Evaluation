import React from "react";
import { DepenseProvider } from "../context/depenseContext";
import AddDepense from "./addDepense"
import ListeDepense from "./listeDepense"
import TotalDepense from "./totalDepense";

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