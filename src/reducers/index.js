import { combineReducers } from "redux";
import spaceXReducer from "./spaceXReducer";

export const rootReducer = combineReducers({
    spaceX: spaceXReducer,
})
