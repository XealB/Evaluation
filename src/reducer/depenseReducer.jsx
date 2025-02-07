import { useReducer } from "react"

const initialState = {
    depensesList : [],
    totalDepense : 0
}

const depenseReducer = (state, action) => {
    switch(action.type){
        case 'addItem':
            const addedDepense = { ...action.payload }
            return{
                ...state,
                depensesList : [...state.depensesList, action.payload],
                totalDepense: [...state.depensesList, addedDepense].reduce((a, b) => a + b.montant, 0)
            }
        case 'deleteItem':
            return {
                ...state,
                // totalDepense: [state.depensesList.filter((depense) => depense.id !== action.payload)].reduce((a, b) => a - b.montant, 0),
                depensesList: [...state.depensesList],
                
            };
            default:
                return state
    }
}

const useDepenseReducer = () => useReducer(depenseReducer, initialState)

export default useDepenseReducer