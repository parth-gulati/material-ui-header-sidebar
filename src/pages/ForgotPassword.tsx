import React, {useState} from "react";
import { Container, FormControl, TextField, Button } from "@material-ui/core";
import useStyles from "../styles/login-page-styles";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function ForgotPassword() {

  let history = useHistory();
  const classes = useStyles();    
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = () =>{
    if(emailError.length === 0){
    console.log("Submitted")
    }
  }
  
  const validateInput = (e: any) =>{
      e.preventDefault();
      if(email.length === 0){
        setEmailError("Field cannot be left blank")
      }
      else if(validator.isEmail(email)){
        setEmailError(''); 
      }
      else{
        setEmailError('Please enter a valid email'); 
      }

      handleSubmit();
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Password Reset</h2>
      <FormControl fullWidth={true} className={classes.form}>
        <div className={classes.inputContainer}>
        <TextField
        className={classes.input}
          required
          id="email"
          label="Email"
          variant="outlined"
          error={emailError.length> 0 ? true : false}
          helperText={emailError.length > 0 ? emailError : null}
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        </div>
        <div className={classes.inputContainer}>
        <Button className={classes.submitButton} onClick={validateInput} variant="contained" color="primary">Reset Password</Button>
  </div>
  <div className={classes.forgotPasswordBlock}>
      <Link to="/login"><a className={classes.forgotPassword}>Go Back</a></Link>
      </div>
      </FormControl>
      <ToastContainer />
    </div>
  );
}
