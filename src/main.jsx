import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store.js";
import { fetchExercises } from "./redux/Actions/exercisesAction.js";
import { fetchFoodItems } from "./redux/Actions/foodsAction.js";
import { fetchGoals } from "./redux/Actions/goalsAction.js";

store.dispatch(fetchExercises());
store.dispatch(fetchFoodItems());
store.dispatch(fetchGoals());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
