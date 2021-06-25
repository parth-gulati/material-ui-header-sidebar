import React, {useState} from "react";
import { Container, FormControl, TextField, Button } from "@material-ui/core";
import useStyles from "../styles/login-page-styles";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Login() {

  let history = useHistory();
  const classes = useStyles();    
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = () =>{
    if(emailError.length === 0 && passwordError.length === 0){
    console.log("Submitted")
    }
  }
  
  const validateInput = (e: any) =>{
      e.preventDefault();
      if(password.length === 0){
        setPasswordError("Field cannot be left blank");
      }
      else if (validator.isStrongPassword(password, {
        minLength: 8})) {
        setPasswordError("");
      } else {
        setPasswordError("Please enter a valid password")
      }
      
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
      <h2 className={classes.heading}>Sign In</h2>
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
        <TextField
        className={classes.input}
          required
          value={password}
          type="password"
          error={passwordError.length> 0 ? true : false}
          helperText={passwordError.length > 0 ? passwordError : null}
          onChange={(e)=>{setPassword(e.target.value)}}
          id="password"
          label="Password"
          variant="outlined"
        />
        </div>
        <div className={classes.inputContainer}>
        <Button className={classes.submitButton} onClick={validateInput} variant="contained" color="primary">Login</Button>
  </div>
  <div className={classes.forgotPasswordBlock}>
      <Link to="/forgot-password"><a className={classes.forgotPassword}>Forgot Password?</a></Link>
      </div>
      </FormControl>
      <ToastContainer />
    </div>
  );
}
