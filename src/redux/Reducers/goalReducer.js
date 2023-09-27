const initialState = {
    goals: [],
    loading: false,
    error: null,
};

const goalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GOALS_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_GOALS_SUCCESS":
            return {
                ...state,
                goals: action.payload,
                loading: false,
            };
        case "FETCH_GOALS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the goals data.",
            };
        case "ADD_GOAL_SUCCESS":
            return {
                ...state,
                goals: [...state.goals, action.payload],
                loading: false,
            };
        case "ADD_GOAL_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the goals data.",
            };
        case "DELETE_GOAL_SUCCESS":
            const updatedGoals = state.goals.filter(
                (goal) => goal._id !== action.payload
            );
            console.log("Delete", updatedGoals);
            return {
                ...state,
                goals: updatedGoals,
                loading: false,
            };
        case "DELETE_GOAL_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error deleting the goals data.",
            };
        default:
            return state;
    }
};

export default goalReducer;
