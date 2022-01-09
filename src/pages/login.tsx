import { Button, Grid, TextField, Paper, Typography, Container } from "@material-ui/core";
import React, {useState} from "react";
//import { useHistory } from "react-router";
import { useStyles } from "./mainCSS";
import logo from "../assets/keitaLogo.jpg";
import UserAuth from "../classes/user";
//import { useAuth } from "../components/hooks";

interface IUser {
    username: String,
    password: String
}

function Login() {

    // if (isAuth) {
    //     history.push('/list');
    // }

    const classes = useStyles();
    const [input, setInput] = useState<IUser>({username:"", password:""});
    const [message, setMessage] = useState(String);

    const handleInputChange = (e:any) => {
        if (e.currentTarget.validity.valid){
            setInput({
                ...input, [e.currentTarget.name] : e.currentTarget.value,
            });
        }
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        UserAuth.login(
            input,
            () => {setMessage("Login correcto");},
            () => {setMessage('Not found');}
        );
    }
    // const history = useHistory();
    // const isAuth = useAuth();
    // const [user, setUser] = useState();

    // if (isAuth) {
    //     history.push('/userStatus')
    // }

    // useEffect(() => {
    //     document.title = 'Iniciar sesión | Sideways';
    // });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (e.target.checkValidity()) {
    //         const options = {
    //             method: "POST",
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 // Genero el body como string
    //                 email: e.target.email.value, // obtengo el value de un input por su name
    //                 password: e.target.pass.value,
    //             }),
    //         };
    //         fetch("http://localhost:8000/api/auth/login/", options)
    //             .then((r) => r.json())
    //             .then((d) => {
    //                 if (d.detail) {
    //                     setUser('Usuario incorrecto');
    //                 }
    //                 if (d.access) {
    //                     sessionStorage.setItem('token', d.access);
    //                     sessionStorage.setItem('department', d.user.department);
    //                     sessionStorage.setItem('hospital', d.user.hospital);
    //                     sessionStorage.setItem('chair', d.user.chairid);
    //                     history.push("/userStatus");
    //                 }
    //             })
    //     }
    // };

    return (
        <Container>
            <Grid direction="row"
                justifyContent="center"
                alignItems="center" container>

                <Grid className={classes.loginContainer} item xs={8} md={4}>
                <img alt="logo"className={classes.klogo} src={logo}></img>

                    <Paper elevation={3} className={classes.loginBox} variant="outlined">
                        <Typography align="left" variant="h2">
                            Log in 
                         </Typography>
                        <Typography className={classes.loginText} component="p">
                            </Typography>
                        <form onSubmit={handleSubmit} className={classes.loginForm}>
                            <TextField onChange={handleInputChange} className={classes.input} required type="email" name="username" label="Username" variant="outlined" />
                            <TextField onChange={handleInputChange} className={classes.input} required type="password" name="password" label="Password" variant="outlined" />
                            <Typography className={classes.errorTXT}>{message}</Typography>
                            <Button type="submit" size="large" className={`${classes.button} ${classes.login}`}>Log in</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;