import React from "react";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Save, Delete, Menu, SportsBasketball } from "@mui/icons-material";

export default function Nav() {
  return (
    <div>
      <AppBar
        sx={{
          position: "fixed",
        }}
      >
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <SportsBasketball />
            <div>NBA Trade Network</div>
          </Box>

          <IconButton
            href="/About"
            sx={{
              color: "white",
            }}
          >
            About
          </IconButton>
          <IconButton
            href="/Trade"
            sx={{
              color: "white",
            }}
          >
            Trade
          </IconButton>
          <IconButton
            href="/Contact"
            sx={{
              color: "white",
            }}
          >
            Contact
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
