import React from 'react';
import {
  Paper,
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Typography
} from '@material-ui/core';
import SettingsRemoteOutlined from '@material-ui/icons/SettingsRemoteOutlined';
//
import { useStyles } from '../styles';


//
export const BasicForm = (props) =>  {
  const classes = useStyles();
  console.log('BasicForm props.instructions:', props.instructions);
  console.log('BasicForm props.singleShots:', props.singleShots);

  const _handleChange = (e) => {
    const inputRegEx = /^[x<>v\^]*$/;
  	if(!e.target.value.match(inputRegEx)){
  		alert('Invalid Input, Must Be: x, <, >, ^, v');
  	}    
    props.updateInput(e.target.value);
  }


  const _handleSubmit = (e, vals = props.instructions) => {
    e.preventDefault();
    props.fetchResult(vals);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SettingsRemoteOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
        <form className={classes.form} onSubmit={(e) => _handleSubmit(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="instructions"
            label={props.label}
            name="instructions"
            autoFocus
            onChange={(e) => _handleChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Instructions
          </Button>

          <div className={classes.root}>
            <Paper className={classes.paperMessage}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>C</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>{props.singleShots}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paperMessage}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>M</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography color='error' noWrap>{props.message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>

        </form>
      </div>
    </React.Fragment>
  );


}
