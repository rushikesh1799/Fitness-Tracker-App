const initialState = {
    exercises: [],
    loading: false,
    error: null,
};

const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EXERCISES_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_EXERCISES_SUCCESS":
            return {
                ...state,
                exercises: action.payload,
                loading: false,
            };
        case "FETCH_EXERCISES_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the exercises data.",
            };
        case "ADD_EXERCISE_SUCCESS":
            return {
                ...state,
                exercises: [...state.exercises, action.payload],
                loading: false,
            };
        case "ADD_EXERCISE_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the exercises data.",
            };
        case "DELETE_EXERCISE_SUCCESS":
            const updatedExercises = state.exercises.filter(
                (exercise) => exercise._id !== action.payload
            );
            return {
                ...state,
                exercises: updatedExercises,
                loading: false,
            };
        case "DELETE_EXERCISE_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error deleting the goals data.",
            };
        default:
            return state;
    }
};

export default exerciseReducer;
