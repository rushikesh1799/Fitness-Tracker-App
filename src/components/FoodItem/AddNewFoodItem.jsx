import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodItems } from "../../redux/Actions/foodsAction";

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

const AddNewFoodItem = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newFoodItem, setNewFoodItem] = useState({
        name: "",
        calories: "",
        protein: "",
        carbohydrates: "",
        fat: "",
    });

    const condition =
        newFoodItem.name === "" ||
        newFoodItem.calories === "" ||
        newFoodItem.protein === "" ||
        newFoodItem.carbohydrates === "" ||
        newFoodItem.fat === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            dispatch(addFoodItems(newFoodItem));
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
                Add New Food Items
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
                        Add New Food Item information
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
                            <label htmlFor="address1">
                                Name (Food Item/Meal):
                            </label>
                            <TextField
                                id="filled-basic address1"
                                variant="outlined"
                                required
                                size="small"
                                value={newFoodItem.name}
                                onChange={(e) =>
                                    setNewFoodItem((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="address2">Calories (cal):</label>
                            <TextField
                                id="filled-basic address2"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newFoodItem.calories}
                                onChange={(e) =>
                                    setNewFoodItem((prev) => ({
                                        ...prev,
                                        calories: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="city">Protein (gms):</label>
                            <TextField
                                id="filled-basic city"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newFoodItem.protein}
                                onChange={(e) =>
                                    setNewFoodItem((prev) => ({
                                        ...prev,
                                        protein: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="state">Carbohydrates (gms):</label>
                            <TextField
                                id="filled-basic state"
                                variant="outlined"
                                required
                                size="small"
                                type="number"
                                value={newFoodItem.carbohydrates}
                                onChange={(e) =>
                                    setNewFoodItem((prev) => ({
                                        ...prev,
                                        carbohydrates: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="pincode">Fat (gms):</label>
                            <TextField
                                type="number"
                                id="filled-basic pincode"
                                variant="outlined"
                                required
                                size="small"
                                value={newFoodItem.fat}
                                onChange={(e) =>
                                    setNewFoodItem((prev) => ({
                                        ...prev,
                                        fat: e.target.value,
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

export default AddNewFoodItem;
