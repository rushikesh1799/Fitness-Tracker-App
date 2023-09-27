import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import exerciseReducer from "./Reducers/exerciseReducer";
import goalReducer from "./Reducers/goalReducer";
import foodReducer from "./Reducers/foodReducer";

const store = createStore(
    combineReducers({
        exercise: exerciseReducer,
        goal: goalReducer,
        food: foodReducer,
    }),
    applyMiddleware(thunk)
);

export default store;
