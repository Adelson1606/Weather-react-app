import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { inject, observer } from 'mobx-react'
import moment from 'moment'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const FiveDays = inject("CityStore")(observer((props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {props.CityStore.fiveDaysWeather.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div>
                  {moment(value.Date).format("MMM Do")}
                </div>
                <div>
                  {Math.floor((value.Temperature.Minimum.Value - 32) * 5 / 9)}
                C<span>&#176;</span> -  {Math.floor((value.Temperature.Maximum.Value - 32) * 5 / 9)}  C<span>&#176;</span>
                </div>
                {value.Day.IconPhrase}
                {value.Day.Icon < 10
                  ? <img src={`https://developer.accuweather.com/sites/default/files/0${value.Day.Icon}-s.png`} />
                  : <img src={`https://developer.accuweather.com/sites/default/files/${value.Day.Icon}-s.png`} />}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
  );
}))

export default FiveDays