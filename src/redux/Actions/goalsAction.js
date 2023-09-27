import axios from "axios";

export const fetchGoals = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_GOALS_LOADING" });
            const response = await axios.get(
                "https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/goals"
            );
            // console.log();
            const data = response.data.goals;
            console.log(data);
            dispatch({ type: "FETCH_GOALS_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the goals,", error);
            dispatch({ type: "FETCH_GOALS_FAILURE" });
        }
    };
};

export const addGoals = (goal) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/goals`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(goal),
                }
            );
            const data = await response.json();
            console.log(data.goal);
            if (data) {
                dispatch({ type: "ADD_GOAL_SUCCESS", payload: data.goal });
            }
        } catch (error) {
            dispatch({ type: "ADD_GOAL_FAILURE" });
        }
    };
};

export const deleteGoal = (goalId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/goals/${goalId}`
            );
            if (response.status === 201) {
                dispatch({ type: "DELETE_GOAL_SUCCESS", payload: goalId });
            }
        } catch (error) {
            dispatch({ type: "DELETE_GOAL_FAILURE" });
        }
    };
};
