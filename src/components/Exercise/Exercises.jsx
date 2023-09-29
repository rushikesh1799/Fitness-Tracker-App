import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteExercise,
    fetchExercises,
} from "../../redux/Actions/exercisesAction";
import { Button } from "@mui/material";
import AddNewExercise from "./AddNewExercise";
import Loader from "../Loader";

const Exercises = () => {
    const dispatch = useDispatch();

    const exercisesState = useSelector((state) => state.exercise);

    const handleExercises = () => {
        dispatch(fetchExercises());
    };

    const handleDelete = (exerciseId) => {
        dispatch(deleteExercise(exerciseId));
    };

    // useEffect(() => {
    //     console.log(exercisesState);
    // }, [exercisesState]);

    return (
        <div>
            <h1>Exercises</h1>
            <Navbar />
            <hr />
            <Button
                onClick={() => handleExercises()}
                variant="contained"
                color="success"
                size="medium"
            >
                Fetch Exercises
            </Button>

            {exercisesState.exercises.length === 0 &&
            exercisesState.loading === false ? (
                <h2>No Exercises to show, Add Exercises here!</h2>
            ) : (
                <></>
            )}

            {exercisesState.loading === true ? (
                <Loader />
            ) : (
                <div className="goals_wrapper">
                    {exercisesState.exercises.map((exercise) => {
                        return (
                            <div
                                key={exercise._id}
                                className="exercise_card"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1587938745570-681161dcfe17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: "white",
                                    padding: "20px",
                                    position: "relative",
                                    opacity: "0.75",
                                }}
                            >
                                <h3>Exercise: {exercise.name}</h3>
                                <p>
                                    <b>Exercise Duration:</b>{" "}
                                    {exercise.duration}
                                </p>
                                <p>
                                    <b>Calories Burned:</b>{" "}
                                    {exercise.calories_Burned}
                                </p>

                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(exercise._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
            <AddNewExercise />
        </div>
    );
};

export default Exercises;
