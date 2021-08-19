import { createStore } from "redux";

const defaultState = {
    types: []
}
const reducer = (state:any = defaultState, action:any) => {
    switch (action.type) {
        case 'CHANGE_VALUE': {
            return {
                ...state,
                types: action.value,
            }
        }
        default: return state
    }
}

const store = createStore(reducer)

export default store;
