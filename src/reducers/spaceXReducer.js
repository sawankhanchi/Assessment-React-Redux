import { GET_ADDRESS, GET_FILTERED_ADDRESS, GET_FILTERED_HISTORY, GET_HISTORY } from "../actions";

const INITIAL_STATE = { history: [], filteredHistory: null, address: [], filteredAddress: null }

const spaceXReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_HISTORY: {
            return {
                ...state,
                history: [...action.payload],
            }
        }
        case GET_FILTERED_HISTORY: {
            return {
                ...state,
                filteredHistory: [...action.payload],
            }
        }
        case GET_ADDRESS: {
            return {
                ...state,
                address: [...action.payload],
            }
        }
        case GET_FILTERED_ADDRESS: {
            return {
                ...state,
                filteredAddress: [...action.payload],
            }
        }  
        default: {
            return state;
        }
    }

}

export default spaceXReducer;
