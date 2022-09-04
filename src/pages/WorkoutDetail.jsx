// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Box } from "@mui/material";
// import { exerciseOptions, fetchData } from "../utils/FetchData";
// import Detail from "../components/Detail";
// import SimilarExercises from "../components/SimilarExercises";

// export default function WorkoutDetail() {
//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const { id } = useParams;

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

//       const exerciseDetailData = await fetchData(
//         `${exerciseDbUrl}/exercises/exercise/${id}`,
//         exerciseOptions
//       );
//       console.log(exerciseDetailData);
//       setExerciseDetail(exerciseDetailData);
//     };

//     fetchExercisesData();
//   }, [id]);

//   return (
//     <Box>
//       <Detail exerciseDetail={exerciseDetail} />
//       <SimilarExercises />
//     </Box>
//   );
// }
