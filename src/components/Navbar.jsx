import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/NotificationsOutlined";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  header: {
    margin: "1px",
    fontFamily: "IBMPlexSemiBold",
  },
  appBar: {
    color: "black",
    backgroundColor: "white",
    padding: '5px'
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, padding: '15px' }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{ color: "black", backgroundColor: "white", marginBottom: '10px'}}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <p className={classes.header}>Welcome</p>
            <span>Your current sales auction and activity.</span>
          </Box>
          <Badge
            badgeContent={2}
            color="error"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MailIcon />
          </Badge>
        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
};
export default NavBar;
