import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import DashboardItem from "./DashboardItem";

const Dashboard = () => {
    const exercises = useSelector((state) => state.exercise.exercises);
    const FoodItems = useSelector((state) => state.food.foodItems);
    const goals = useSelector((state) => state.goal.goals);

    const totalCaloriesBurned = exercises.reduce(
        (acc, exercise) => acc + Number(exercise.calories_Burned),
        0
    );
    const totalCaloriesConsumed = FoodItems.reduce(
        (acc, foodItem) => acc + Number(foodItem.calories),
        0
    );
    const totalCaloriesGoal = goals.reduce(
        (acc, goal) => acc + Number(goal.target_calories),
        0
    );
    const remainingCaloriesToGoal = totalCaloriesGoal - totalCaloriesBurned;

    return (
        <div>
            <h1>Fitness Tracker App</h1>
            <Navbar />
            <hr />
            <div className="calorie_metrics">
                <DashboardItem value={totalCaloriesBurned} iconName={"fire"} />
                <DashboardItem
                    value={totalCaloriesConsumed}
                    iconName={"cutlery"}
                />
                <DashboardItem
                    value={totalCaloriesGoal}
                    iconName={"flag-checkered"}
                />
                <DashboardItem
                    value={remainingCaloriesToGoal}
                    iconName={"flag-checkered"}
                />
            </div>
        </div>
    );
};

export default Dashboard;
