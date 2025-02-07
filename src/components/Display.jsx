import useDepenseReducer from "../reducer/depenseReducer";
import AddDepense from "./addDepense"
import ListeDepense from "./listeDepense"

const Display = () => {

    const [state, dispatch] = useDepenseReducer(); 
    const {depensesList} = state

    const addItem = () => {
        dispatch({type:'addItem'})
    }

    return(
        <>
            <AddDepense/>
            <ListeDepense liste={depensesList}/>
        </>
    )
}

export default Display