import axios from "axios";

export const fetchExercises = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_EXERCISES_LOADING" });
            const response = await axios.get(
                "https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/exercises"
            );
            // console.log();
            const data = response.data.exercises;
            console.log(data);
            dispatch({ type: "FETCH_EXERCISES_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the goals,", error);
            dispatch({ type: "FETCH_EXERCISES_FAILURE" });
        }
    };
};

export const addExercises = (exercise) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/exercises`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(exercise),
                }
            );
            const data = await response.json();
            console.log(data.exercise);
            if (data) {
                dispatch({
                    type: "ADD_EXERCISE_SUCCESS",
                    payload: data.exercise,
                });
            }
        } catch (error) {
            dispatch({ type: "ADD_EXERCISE_FAILURE" });
        }
    };
};

export const deleteExercise = (exerciseId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/exercises/${exerciseId}`
            );
            if (response.status === 201) {
                dispatch({
                    type: "DELETE_EXERCISE_SUCCESS",
                    payload: exerciseId,
                });
            }
        } catch (error) {
            dispatch({ type: "DELETE_EXERCISE_FAILURE" });
        }
    };
};
