import {Grid, TextField, Button, Typography} from "@material-ui/core";
import {useStyles} from "../pages/mainCSS";


function SubForm(){
    const classes = useStyles();
    return(
        <Grid>
            <Typography color="primary" align="center" variant="h1"> Create a new subsidy</Typography>
            <Typography className={classes.text} align="center"> Please insert your information below.</Typography>
        <form className={classes.loginForm}>
        <TextField className={classes.input} required type="text" name="origin" label="Origin" variant="outlined" />
        <TextField className={classes.input} required type="text" name="destination" label="Destination" variant="outlined" />
        <TextField
          label="Subsidy value"
          variant="outlined"
          type="number"
          InputLabelProps={{
            shrink: false,
          }}
          required
          className={classes.input}
        />
        <Button className={`${classes.button} ${classes.login}`}>Submit</Button>
        </form>
        </Grid>

        
    );
}

export default SubForm;