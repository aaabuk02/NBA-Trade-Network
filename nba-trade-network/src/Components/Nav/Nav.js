import React from "react";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Save, Delete, Menu, SportsBasketball } from "@mui/icons-material";

export default function Nav() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <SportsBasketball />
            <div>NBA Trade Network</div>
          </Box>

          <IconButton href="/About">About</IconButton>
          <IconButton href="/Trade">Trade</IconButton>
          <IconButton href="/Contact">Contact</IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
