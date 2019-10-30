import React from 'react';
import {
  Paper,
  Button,
  Tabs,
  Tab,
  Input,
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
  console.log(props.instructions);

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

  const _handleTabChange = (e, val) => {
    props.handleTabChange(val);
  }

  // read local text file and updated to props.instructions
  const _handleUploadFile = (e) => {

    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
       let file = e.target.files[0];
       const reader = new FileReader();

       let textFile = /text.*/;
       // to avoid null file selected: !!file 
       if (!!file && file.type.match(textFile)) {
          reader.onload = function (e) {
            let text = e.target.result;
            const inputRegEx = /^[x<>v^]*$/g;
            // remove all blank space
            let txt = String(text).replace(/ /g, '');
            // console.log('_handleUploadFile: ', txt);
           	if(txt.match(inputRegEx)){
               props.updateExecution(true);
               props.updateInput(String(txt));
               file = null;
           	}else{
               alert('Invalid Input, Must Be: x, <, >, ^, v');
               props.updateExecution(false);
            }
          };
          reader.readAsText(file);

       } else {
          alert('It doesn\'t seem to be a text file!');
       }

    } else {
      alert("Your browser is too old to support HTML5 File API");
    }

  }


  const _handleSubmit = (e, ins = props.instructions, counts = props.drone_counts) => {
    e.preventDefault();
    if(!props.drone_counts){
      return alert('Please select Drone counts!');
    }
    if(!ins){
      return alert('Please input instructions!');
    }
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

        <Tabs
          value={props.tab_selector}
          onChange={(e, val) => _handleTabChange(e, val)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Input Instructions" value="input" />
          <Tab label="Upload Txt File" value="upload" />
        </Tabs>

        <form className={classes.form} onSubmit={(e) => _handleSubmit(e)} noValidate>
          {
            props.tab_selector === 'input' &&
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
          }
          {
            props.tab_selector === 'upload' &&
            <Input
              name="upload_txt_file"
              onChange={(e) => _handleUploadFile(e)}
              type="file"
              placeholder="upload txt file"
              required={true}

            />
          }

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
