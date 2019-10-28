import React from 'react';
import {
  Paper,
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core';

import SettingsRemoteOutlined from '@material-ui/icons/SettingsRemoteOutlined';
//
import { useStyles } from '../styles';

//
export const BasicForm = (props) =>  {

  const classes = useStyles();

  const _handleInputChange = (e) => {
    const inputRegEx = /^[x<>v^]*$/g;
  	if(e.target.value.match(inputRegEx)){
      props.updateExecution(true);
      props.updateInput(e.target.value);
  	}else{
      alert('Invalid Input, Must Be: x, <, >, ^, v');
      props.updateExecution(false);
    }
  }


  const _handleOptionChange = (e) => {
    props.updateDroneCounts(e.target.value);
  }


  const _handleSubmit = (e, ins = props.instructions, counts = props.drone_counts) => {
    e.preventDefault();
    props.fetchResult(ins, counts);
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
            fullWidth
            id="instructions_string"
            label={props.label}
            name="instructions_string"
            autoFocus
            onChange={(e) => _handleInputChange(e)}
          />

        <RadioGroup aria-label="position" name="position" value={props.drone_counts} onChange={(e) => _handleOptionChange(e)} row>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="One Drone"
                labelPlacement="start"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="Two Drones"
                labelPlacement="start"
              />
          </RadioGroup>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!props.execution}
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
				  {
					  props.loading ?
					  <CircularProgress className={classes.progress} />
					  : <Typography noWrap>{'Valid Billboard Photos: '}{props.singleShots }</Typography>
				  }
                    
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paperMessage}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>M</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography color='error' noWrap>{!!props.message && `Error Messages: ${props.message}`}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </div>

        </form>

      </div>
    </React.Fragment>
  );


}
