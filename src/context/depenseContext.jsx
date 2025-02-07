import React, { createContext, useContext} from 'react';
import useDepenseReducer from '../reducer/depenseReducer';

const DepenseContext = createContext();

export const DepenseProvider = ({ children }) => {

  const [state, dispatch] = useDepenseReducer();

  return <DepenseContext.Provider value={{state, dispatch}}> {children} </DepenseContext.Provider>

};

const useDepenseContext = () => useContext(DepenseContext)

export default useDepenseContext