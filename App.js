import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

import Rightbarr from "./components/Rightbarr";
import { Box,  Stack } from "@mui/material";
export default function App() {
  return (
    <Box >
       <Navbar/> 
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Sidebar />
        <Feed />
        <Rightbarr />
      </Stack>
    </Box>
  );
}
