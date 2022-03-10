import { FC, useReducer } from "react";
import { UiContext, uiReducer } from ".";

export interface UiState {
    isMenuOpen: boolean;
}

const UI_INIT_STATE: UiState = {
    isMenuOpen: false
}


export const UiProvider: FC = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const openSideBar = () => {
      dispatch({type: 'open'})
  }
  const closeSideBar = () => {
      dispatch({type: 'close'})
  }

  return ( 
    <UiContext.Provider value={{
        ...state,
        closeSideBar,
        openSideBar
    }}>
        {children}
    </UiContext.Provider>
  )
}

