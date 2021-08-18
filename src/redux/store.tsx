import { createStore } from "redux";

const defaultState = {
    types: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE': {
            const newUsers = [action.value, ...state.user];
            
            return {
                ...state,
                user: newUsers,
            }
        }
        default: return state
    }
}

const store = createStore(reducer)

export default store;
