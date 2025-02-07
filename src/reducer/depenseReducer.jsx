import { useReducer } from "react"

const initialState = {
    depensesList : []
}

const depenseReducer = (state, action) => {
    switch(action.type){
        case 'addItem':
            return{
                ...state,
                depensesList : [...state.depensesList, action.payload]
            }
            default:
                return state
    }
}

const useDepenseReducer = () => useReducer(depenseReducer, initialState)

export default useDepenseReducer