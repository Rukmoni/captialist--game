import React from "react";
import {useSelector} from 'react-redux';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";



export default function BusinessCard() {
  const classes = useStyles();
const totalCashAmount = useSelector(state => state.businessGame.totalCashAmount)
console.log("totalCashAmount",totalCashAmount);
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <Grid container spacing={1}>
           
          <Grid item xs={4}>
            <ButtonBase className={classes.image} onClick={()=>console.log("Clicked")}>
              <img
                className={classes.img}
                alt="complex"
                src={require("./../../assets/lemon.jpeg")}
              />
            </ButtonBase>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              disableElevation
            >
              Disable
            </Button>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <BorderLinearProgress variant="determinate" value={0} >
                   
                    </BorderLinearProgress>
                <Grid container spacing={1}>
                  <Grid item xs={3} color="#ff0000">
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      disabled
                    >
                      Buy
                    </Button>
                  </Grid>
                  <Grid item xs={9}>
                    <Button
                      variant="contained"
                      
                      color="primary"
                      disabled
                    >
                      Hire Manager
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Paper elevation={0} style={{ backgroundColor: "#eaeaea" }}>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer", padding: "10px" }}
                  >
                    Timer
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  paper: {
    elevation: 0,
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom:20,
    width:350,
    height:160,
    maxWidth: 350,
    backgroundColor:"gray"
  },
  timerBg: {
    backgroundColor: "red"
  },
  image: {
    width: 128,
    height: 100
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));
const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 40,
    borderRadius: 15,
    marginBottom: 10
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
  },
  bar: {
    borderRadius: 15,
    backgroundColor: "#008000"
  }
}))(LinearProgress);
