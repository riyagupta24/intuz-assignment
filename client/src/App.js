import React from 'react';
import './styles/App.scss';

import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Products from "./pages/Products";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div className="App mainQuad">
      <div className={classes.root}>
        <Grid container className="left-outer-quad">
          <Products />
        </Grid>
      </div>
    </div>
  );
}

export default App;
