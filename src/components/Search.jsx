import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

const Search = inject("CityStore")(observer((props) => {
  const classes = useStyles();
  const [search, setSearch] = React.useState('')

  const handleSearch = e => {
    let inputVal = { ...search }
    inputVal = e.target.value
    setSearch(inputVal)
  }

  const searchCity = async () => {
    await props.CityStore.searchCity(search)
    setSearch('')

  }
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Your city"
        onChange={handleSearch}
        value={search}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon onClick={searchCity} />
      </IconButton>
    </Paper>
  );
}))

export default Search