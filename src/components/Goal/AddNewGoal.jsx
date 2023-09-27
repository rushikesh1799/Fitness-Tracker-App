import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoals } from "../../redux/Actions/goalsAction";

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

const AddNewGoal = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newGoal, setNewGoal] = useState({
        name: "",
        description: "",
        target_date: "",
        target_calories: "",
        status: "",
    });

    const condition =
        newGoal.name === "" ||
        newGoal.description === "" ||
        newGoal.target_date === "" ||
        newGoal.target_calories === "" ||
        newGoal.status === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            dispatch(addGoals(newGoal));
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
                Add New Goals
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
                        Add New Goal information
                    </Typography>
                    <hr />
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                        component="div"
                    >
                        <div className="form_input">
                            <label htmlFor="address1">Name:</label>
                            <TextField
                                id="filled-basic address1"
                                variant="outlined"
                                required
                                size="small"
                                value={newGoal.name}
                                onChange={(e) =>
                                    setNewGoal((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="address2">Description:</label>
                            <TextField
                                id="filled-basic address2"
                                variant="outlined"
                                required
                                size="small"
                                value={newGoal.description}
                                onChange={(e) =>
                                    setNewGoal((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="city">Target Date:</label>
                            <TextField
                                id="filled-basic city"
                                variant="outlined"
                                required
                                type="date"
                                size="small"
                                value={newGoal.target_date}
                                onChange={(e) =>
                                    setNewGoal((prev) => ({
                                        ...prev,
                                        target_date: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="state">Target Calories:</label>
                            <TextField
                                id="filled-basic state"
                                variant="outlined"
                                required
                                size="small"
                                value={newGoal.target_calories}
                                onChange={(e) =>
                                    setNewGoal((prev) => ({
                                        ...prev,
                                        target_calories: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="pincode">Status:</label>
                            <TextField
                                type="text"
                                id="filled-basic pincode"
                                variant="outlined"
                                required
                                size="small"
                                value={newGoal.status}
                                onChange={(e) =>
                                    setNewGoal((prev) => ({
                                        ...prev,
                                        status: e.target.value,
                                    }))
                                }
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

export default AddNewGoal;
