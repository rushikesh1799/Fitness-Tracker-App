import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
    deleteFoodItem,
    fetchFoodItems,
} from "../../redux/Actions/foodsAction";
import AddNewFoodItem from "./AddNewFoodItem";
import Loader from "../Loader";

const FoodItems = () => {
    const dispatch = useDispatch();

    const foodItemsState = useSelector((state) => state.food);

    const handleFoodItems = () => {
        dispatch(fetchFoodItems());
    };

    const handleDelete = (foodItemId) => {
        dispatch(deleteFoodItem(foodItemId));
    };

    useEffect(() => {
        console.log(foodItemsState);
    }, [foodItemsState]);

    return (
        <div>
            <h1>Food Items</h1>
            <Navbar />
            <hr />
            <Button
                onClick={() => handleFoodItems()}
                variant="contained"
                color="success"
                size="medium"
            >
                Fetch Food Items
            </Button>

            {foodItemsState?.foodItems?.length === 0 &&
            foodItemsState.loading === false ? (
                <h2>No Food Items to show, Add Food Items here!</h2>
            ) : (
                <></>
            )}

            {foodItemsState.loading === true ? (
                <Loader />
            ) : (
                <div className="goals_wrapper">
                    {foodItemsState.foodItems.map((foodItem) => {
                        return (
                            <div
                                key={foodItem._id}
                                className="goal_card"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: "white",
                                    padding: "20px",
                                    position: "relative",
                                    opacity: "0.75",
                                }}
                            >
                                <h3>Meal Name: {foodItem.name}</h3>
                                <p>
                                    <b>Calories (cal):</b> {foodItem.calories}
                                </p>
                                <p>
                                    <b>Protein (gms):</b> {foodItem.protein}
                                </p>
                                <p>
                                    <b>Carbohydrates (gms):</b>{" "}
                                    {foodItem.carbohydrates}
                                </p>
                                <p>
                                    <b>Fat (gms):</b> {foodItem.fat}
                                </p>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(foodItem._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
            <AddNewFoodItem />
        </div>
    );
};

export default FoodItems;
