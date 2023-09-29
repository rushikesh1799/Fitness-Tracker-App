import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercises } from "../../redux/Actions/exercisesAction";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
    "@media (max-width: 768px)": {
        width: 300,
    },
};

const AddNewExercise = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newExercise, setNewExercise] = useState({
        name: "",
        duration: "",
        calories_Burned: "",
    });

    const condition =
        newExercise.name === "" ||
        newExercise.duration === "" ||
        newExercise.calories_Burned === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            dispatch(addExercises(newExercise));
            handleClose();
        }
    };

    return (
        <div>
            <Button
                className="add_goal"
                variant="contained"
                color="info"
                size="medium"
                onClick={handleOpen}
            >
                Add New Exercises
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add New Exercise information
                    </Typography>
                    <hr />
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                        component="div"
                    >
                        <div className="form_input">
                            <label htmlFor="address1">Name:</label>
                            <TextField
                                id="outlined-required"
                                label="Name"
                                variant="outlined"
                                required
                                size="small"
                                value={newExercise.name}
                                onChange={(e) =>
                                    setNewExercise((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="address2">Duration:</label>
                            <TextField
                                id="outlined-required"
                                label="Duration (time)"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newExercise.duration}
                                onChange={(e) =>
                                    setNewExercise((prev) => ({
                                        ...prev,
                                        duration: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="city">Calories Burned:</label>
                            <TextField
                                id="outlined-required"
                                label="Calories (cal)"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newExercise.calories_Burned}
                                onChange={(e) =>
                                    setNewExercise((prev) => ({
                                        ...prev,
                                        calories_Burned: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                    </Typography>
                    <Typography
                        id="modal-modal-footer"
                        sx={{ mt: 2, display: "flex", gap: "1rem" }}
                        component="div"
                    >
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="small"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Add
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default AddNewExercise;
