import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Link, Route } from 'react-router-dom'
import './App.css';
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import MainPage from './components/MainPage';
import Favorites from './components/Favorites';

@inject('CityStore')
@observer
class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.CityStore.getTLV()
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        type: "dark"
      }
    });
    return (
      <ThemeProvider theme={theme}>
    <Router>
    <Route path="/" exact render={() => <MainPage/>} />
    <Route path="/favorites" exact render={() => <Favorites/>} />

    </Router>
      </ThemeProvider>

    );
  }
}

export default App;
