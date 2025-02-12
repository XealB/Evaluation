import { useReducer } from "react"

const initialState = {
    depensesList : [],
    totalDepense : 0
}

const depenseReducer = (state, action) => {
    switch(action.type){
        case 'addItem':
            return{
                ...state,
                depensesList : [...state.depensesList, action.payload],
                totalDepense: [...state.depensesList, action.payload].reduce((a, b) => a + b.montant, 0)
            }
        case 'deleteItem':
            return {
                ...state,
                depensesList: state.depensesList.filter(i => i.id !== action.payload),
                totalDepense: state.depensesList.filter(i => i.id !== action.payload).reduce((a, b) => a + b.montant, 0)
            };
            default:
                return state
    }
}

const useDepenseReducer = () => useReducer(depenseReducer, initialState)

export default useDepenseReducer