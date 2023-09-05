
import React ,{createContext, useContext ,useReducer} from 'react'

// step1: Creatinga context
export const StateContext = createContext();

// Data Provider
export const StateProvider =({reducer,initalState,children}) =>(
  <StateContext.Provider value={useReducer(reducer,initalState)}>
  {children}
  </StateContext.Provider>
)

// step3: using useContext so that other component can use "StateContext"(context created in step1:)
export const useStateValue = () => useContext(StateContext)

