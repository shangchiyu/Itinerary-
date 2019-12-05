import React , {useEffect} from "react";
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
import Profile from"./Profile"

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser , decodeToken} from './store/Actions/userAction';
import { withRouter } from 'react-router-dom';
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";



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
function Navigation(props) {
  console.log(localStorage)
const {decodeToken} = props  // console.log('this.props', auth)
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [openDialog] = React.useState(false);

  useEffect(() => {//this works as same as componentDimount
if(!isAuthenticated && localStorage.length !==0){
  console.log(localStorage)
  decodeToken(localStorage.jwtToken)
}
  }, [])
  const drawerButton = {
    textDecorationLine: "none"
  };

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const {isAuthenticated} = props.auth;

  // console.log("AUTH", props.auth, isAuthenticated)

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
{isAuthenticated ? <Profile/>: <SignIn/>}
          {/* {loginUser&& <SignIn/>}
         {logoutUser&& <Profile/>}  */}
           {/* <SignIn/> */}
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
      
    </div>
  );
}
Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  decodeToken: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapDispatchToProps = dispatch => {

  return {
      logoutUser: () => dispatch(logoutUser ()),
      decodeToken: (token) => dispatch(decodeToken(token))

     
  };
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export  default connect(mapStateToProps,mapDispatchToProps)(withRouter(Navigation))