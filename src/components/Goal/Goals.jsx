import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import AddNewGoal from "./AddNewGoal";
import Button from "@mui/material/Button";
import { fetchGoals, deleteGoal } from "../../redux/Actions/goalsAction";
import Loader from "../Loader";

const Goals = () => {
    const dispatch = useDispatch();

    const goalState = useSelector((state) => state.goal);

    const handleGoals = () => {
        dispatch(fetchGoals());
    };

    const handleDelete = (goalId) => {
        dispatch(deleteGoal(goalId));
    };

    // useEffect(() => {
    //     console.log(goalState.goals);
    // }, [goalState]);

    // useEffect(() => {
    //     dispatch(fetchGoals());
    // }, [dispatch]);

    // useEffect(() => {
    //     try {
    //         const fetchGoals = async () => {
    //             try {
    //                 const response = await axios.get(
    //                     "https://fitness-tracker-backend-api.rushikeshbunge1.repl.co/api/goals"
    //                 );
    //                 // console.log();
    //                 const data = response.data.goals;
    //                 console.log(data);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         };
    //         fetchGoals();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    return (
        <div>
            <h1>Goals</h1>
            <Navbar />
            <hr />
            <Button
                onClick={() => handleGoals()}
                variant="contained"
                color="success"
                size="medium"
            >
                Fetch Goals
            </Button>

            {goalState.goals.length === 0 && goalState.loading === false ? (
                <h2>No Goals to show, Add Goals here!</h2>
            ) : (
                <></>
            )}

            {goalState.loading === true ? (
                <Loader />
            ) : (
                <div className="goals_wrapper">
                    {goalState.goals.map((goal) => {
                        return (
                            <div
                                key={goal._id}
                                className="goal_card"
                                style={{
                                    backgroundImage: `url('https://img.freepik.com/free-photo/dartboard-with-arrow-increasing-bar-graph-enhance-setup-business-objective-target-goal-concept-by-3d-render_616485-95.jpg?w=360&t=st=1695812552~exp=1695813152~hmac=bc104ff92fed4242af0e09bb245928af7d37c353c12b2de55c61af957c959c15')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: "black",
                                    padding: "20px",
                                    position: "relative",
                                    opacity: "0.75",
                                }}
                            >
                                <h3>Goal: {goal.name}</h3>
                                <p>
                                    <b>Goal Description:</b> {goal.description}
                                </p>
                                <p>
                                    <b>Target Calories:</b>{" "}
                                    {goal.target_calories}
                                </p>
                                <p>
                                    <b>Goal Status:</b> {goal.status}
                                </p>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(goal._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}

            <AddNewGoal />
        </div>
    );
};

export default Goals;
