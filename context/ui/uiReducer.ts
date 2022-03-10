import { UiState } from ".";

type Action = 
  | {type: 'open'}
  | {type: 'close'}

export const uiReducer = (state: UiState, action: Action): UiState => {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                isMenuOpen: true
            }
        case 'close':
            return {
                ...state,
                isMenuOpen: false
            }
        default:
            return state
    }
}