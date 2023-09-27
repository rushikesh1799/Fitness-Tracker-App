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
                                    backgroundImage: `url('https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?w=996&t=st=1695811226~exp=1695811826~hmac=3514a7f5591ed27b4acec7d99ddf5eb685d9bb1b8a202437646771fe1c275f49')`,
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
