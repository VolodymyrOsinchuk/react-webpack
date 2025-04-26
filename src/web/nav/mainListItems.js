import * as React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, ShoppingCart } from "@mui/icons-material";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
  </div>
);
