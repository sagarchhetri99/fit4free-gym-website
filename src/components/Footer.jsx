import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/main-logo.png";

export default function Footer() {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "41px", height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        mt="10px"
        textAlign="center"
        pb="40px"
      >
        &#9400; Sagar Chhetri 2022 Fit4Free | All Rights Reserved
      </Typography>
    </Box>
  );
}
