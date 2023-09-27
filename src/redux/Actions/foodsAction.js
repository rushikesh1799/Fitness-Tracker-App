import axios from "axios";

export const fetchFoodItems = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_FOODITEMS_LOADING" });
            const response = await axios.get(
                "https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/food"
            );
            // console.log();
            const data = response.data.Foods;
            console.log(data);
            dispatch({ type: "FETCH_FOODITEMS_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the goals,", error);
            dispatch({ type: "FETCH_FOODITEMS_FAILURE" });
        }
    };
};

export const addFoodItems = (foodItem) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/food`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(foodItem),
                }
            );
            const data = await response.json();
            console.log(data.food);
            if (data) {
                dispatch({
                    type: "ADD_FOODITEMS_SUCCESS",
                    payload: data.food,
                });
            }
        } catch (error) {
            dispatch({ type: "ADD_FOODITEMS_FAILURE" });
        }
    };
};

export const deleteFoodItem = (foodItemId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/food/${foodItemId}`
            );
            if (response.status === 201) {
                dispatch({
                    type: "DELETE_FOODITEMS_SUCCESS",
                    payload: foodItemId,
                });
            }
        } catch (error) {
            dispatch({ type: "DELETE_FOODITEMS_FAILURE" });
        }
    };
};
