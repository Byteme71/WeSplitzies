import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Current from "./Current/Current.js";
import QR from "./QR/QR.js";
import History from "./History/History.js";
import Payment from "./Payment/Payment.js";
import Contact from "./Contact/Contact.js";
import Help from "./Help/Help.js";
// import Signup from "./Signup/Signup.js";
// import Login from "./Login/Login.js";
// import Logout from "./Logout.js";

const drawerWidth = 220;
const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Navbar extends React.Component {
  state = {
    open: false,
    currentPage: "Home",
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    var page;
    if(this.state.currentPage === "/") {    
      page = <Current />
    }
    else if (this.state.currentPage === "qr") {
      page =<QR />
    }
    else if (this.state.currentPage === "history") {
      page =<History />
    }
    else if (this.state.currentPage === "payment") {
      page =<payment />
    }
    else if (this.state.currentPage === "contact") {
        page =<Contact />
    }
    else if (this.state.currentPage === "help") {
      page =<Help />
    }

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}  >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className= {classNames(classes.menuButton, this.state.open && classes.hide)} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {"Page Name"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),}} open={this.state.open}>
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Router>
          <div>
          <Divider />
            <List><a onClick={this.handlePageChange("Current")} className={this.state.currentPage === "Home" ? "nav-link active" : "nav-link"}> <i class="fas fa-money-check-alt"></i> Current </a> </List>

            <List><a onClick={this.handlePageChange("QR")} className={this.state.currentPage === "Home" ? "nav-link active" : "nav-link"}> <i class="fas fa-qrcode"></i> QR Scan </a> </List>

            <List><a onClick={this.handlePageChange("History")} className={this.state.currentPage === "Home" ? "nav-link active" : "nav-link"}> <i class="far fa-list-alt"></i> History </a> </List>

            <List><a onClick={this.handlePageChange("Payment")} className={this.state.currentPage === "Home" ? "nav-link active" : "nav-link"}> <i class="far fa-credit-card"></i> Payment Method </a> </List>

            <List><a onClick={this.handlePageChange("Contact")} className={this.state.currentPage === "Home" ? "nav-link active" : "nav-link"}> <i class="fas fa-user"></i> Contact Us </a> </List>

            <List><a onClick={this.handlePageChange("Help")} className={this.state.currentPage === "Home" ? "nav-link active" : "nav-link"}> <i class="far fa-question-circle"></i> Help </a> </List>
          <Divider />
          </div>
          </ Router>

            <List>Logout</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <div>
                <Typography currentPage={this.state.currentPage} handlePageChange={this.handlePageChange} />
              {page}
            </div>
        </main>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navbar);