import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export default function Home() {
  return (
    <Box>
      <Banner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}
