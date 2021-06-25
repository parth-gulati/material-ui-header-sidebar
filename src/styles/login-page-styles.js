import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: "100px",
      alignItems: "center",
      textAlign: "center",
    },
    forgotPasswordBlock: {
      marginTop: "10px",
    },
    forgotPassword: {
      fontSize: "12px",
    },
    form: {
      textAlign: "center",
      width: "300px",
    },
    heading: {
      fontFamily: "Raleway",
      letterSpacing: "2px",
    },
    inputContainer: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
    },
    submitButton: {
      width: "80%",
    },
    input: {
      width: "125%",
    },
  })
);

export default useStyles;
