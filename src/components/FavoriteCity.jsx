import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 10
  },
  // image: {
  //   width: 128,
  //   height: 128,
  // },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '50%',
  },
}));

const FavoriteCity = inject("CityStore")(observer((props) => {
  const classes = useStyles();
  const city = props.city
debugger
  const removeFromFav = () => {
    props.CityStore.removeFromFav(props.CityStore.name)
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {city.icon < 10
                ? <img className={classes.img}  src={`https://developer.accuweather.com/sites/default/files/0${city.icon}-s.png`} />
                : <img className={classes.img}  src={`https://developer.accuweather.com/sites/default/files/${city.icon}-s.png`} />}
                {city.weatherText}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {city.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={removeFromFav}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{city.temperature} C<span>&#176;</span></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}))

export default FavoriteCity