import React from "react";
import SignIn from "./SignIn";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

import Button from "@material-ui/core/Button";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const drawerWidth = "250px";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));
const logo = {
  width: "40%",
  marginRight: "15%",
  marginLeft: "15%"
};

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [openDialog] = React.useState(false);
  const logLayout = {
    display: "flex",
    marginTop: "100px",
    flexDirection: "column",
    justifyContent: "center"
  };
  const medLayout = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };
  const inputStyle = {
    border: "2px solid #F5F3F3",
    borderRadius: "4px",
    marginTop: "20px",
    backgroundColor: "#DCDCDC",
    height: "30px"
  };
  const signButton = {
    border: "2px solid grey",
    borderRadius: "4px"
  };
  const buttonLayout = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  };
  const drawerButton = {
    textDecorationLine: "none"
  };
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const handleClickOpen = () => {
  //   openDialog(true);
  // };

  // const handleClose = () => {
  //   setDialog(false);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <SignIn/>

          <img className="logo" src={require("./myLogo.png")} style={logo} />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Button onClick={handleDrawerClose}>
              <Link to="/" style={drawerButton}>
                Home
              </Link>
            </Button>
          </ListItem>
          <ListItem>
            <Button onClick={handleDrawerClose}>
              <Link to="/cities" style={drawerButton}>
                Cities
              </Link>
            </Button>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      {/* <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Button autoFocus onClick={handleClose} color="primary">
            {"< Back"}
          </Button>
          <div style={logLayout}>
            <DialogContentText>
              <strong>Sign In:</strong>
              <div style={medLayout}>
                <input placeholder="username" style={inputStyle} />
                <input placeholder="password" style={inputStyle} />
              </div>
            </DialogContentText>

            <DialogActions style={buttonLayout}>
              <Button style={signButton} color="primary">
                Sign In
              </Button>
              <Link to="./SignUp" style={drawerButton}>
                <Button
                  style={signButton}
                  color="primary"
                  onClick={handleClose}
                  autoFocus
                >
                  Sign up
                </Button>
              </Link>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
