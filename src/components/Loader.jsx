import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem 0rem",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Loader;
