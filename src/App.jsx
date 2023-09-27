import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Goals from "./components/Goal/Goals";
import FoodItems from "./components/FoodItem/FoodItems";
import Exercises from "./components/Exercise/Exercises";
import Dashboard from "./components/Dashboard";
import { NavLink } from "react-router-dom";

function App() {
    const state = useSelector((state) => state.exercise);

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/exercises" element={<Exercises />}></Route>
                <Route path="/foodItems" element={<FoodItems />}></Route>
                <Route path="/goals" element={<Goals />}></Route>
            </Routes>
        </>
    );
}

export default App;
