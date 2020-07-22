import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { inject, observer } from 'mobx-react'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const City = inject("CityStore")(observer((props) => {
  const classes = useStyles();
  const [isFav, setIsFav] = React.useState(false)

  const addToFav = () => {
    props.CityStore.addToFav({name:props.CityStore.name, temperature:props.CityStore.temperature, icon:props.CityStore.weatherIcon, weatherText: props.CityStore.weatherText})
    let inputVal = { ...isFav }
    inputVal = !isFav
    setIsFav(inputVal)
  }

  const removeFromFav =()=>{
    props.CityStore.removeFromFav(props.CityStore.name)
    let inputVal = { ...isFav }
    inputVal = !isFav
    setIsFav(inputVal)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant="h1" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>
          {props.CityStore.temperature} {props.CityStore.unit}<span>&#176;</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.CityStore.weatherText}
        </Typography>
        {props.CityStore.weatherIcon < 10
          ? <img src={`https://developer.accuweather.com/sites/default/files/0${props.CityStore.weatherIcon}-s.png`} />
          : <img src={`https://developer.accuweather.com/sites/default/files/${props.CityStore.weatherIcon}-s.png`} />}

        <CardContent>

          <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>
            {props.CityStore.name}

          </Typography>

        </CardContent>
        <IconButton aria-label="add to favorites">
          {isFav === false
            ? <FavoriteIcon onClick={addToFav} style={{ color: 'white' }} />
            : <FavoriteIcon onClick={removeFromFav} style={{ color: 'red' }} />}
        </IconButton>
      </CardActionArea>
    </Card>
  );
}))

export default City
