import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";

export default function Exercises({ exercises, setExercises, bodyPart }) {
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
    </Box>
  );
}
