const initialState = {
    foodItems: [],
    loading: false,
    error: null,
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_FOODITEMS_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_FOODITEMS_SUCCESS":
            return {
                ...state,
                foodItems: action.payload,
                loading: false,
            };
        case "FETCH_FOODITEMS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the foodItems data.",
            };
        case "ADD_FOODITEMS_SUCCESS":
            return {
                ...state,
                foodItems: [...state.foodItems, action.payload],
                loading: false,
            };
        case "ADD_FOODITEMS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the foodItems data.",
            };
        case "DELETE_FOODITEMS_SUCCESS":
            const updatedFoodItems = state.foodItems.filter(
                (foodItem) => foodItem._id !== action.payload
            );
            // console.log("Delete", updatedGoals);
            return {
                ...state,
                foodItems: updatedFoodItems,
                loading: false,
            };
        case "DELETE_FOODITEMS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error deleting the food Item data.",
            };

        default:
            return state;
    }
};

export default foodReducer;
