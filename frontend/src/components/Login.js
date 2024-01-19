import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Box, Container, Grid, Item, Typography, Button, TextField } from "@mui/material";
import "./styling/LoginRegister.css"
import { Link, useAsyncError, useNavigate } from 'react-router-dom';

function Login() {

    const [jwtToken, setJwtToken] = useContext(AuthContext); 

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleemailChange = (event) => {
        setemail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const resetFields = () => {
        setemail('');
        setPassword('');
        console.log("FIELDS RESET?")
    };

    const shout = () => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    };

    const login = async () => {
        try {
            const response = await fetch ('http://localhost:8080/api/users/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if(response.ok) {
                const data = await response.json();
                setJwtToken(data.token);
                console.log('AUTHENTICATION SUCCESSFUL');
                console.log(jwtToken)
                console.log('ACQUIRED JWT: ', data.token);
                navigate('/');

            } else {
                console.error('AUTHENTICAITON FAILED')
            }
        } catch (error) {
            console.error('ERROR DURING AUTH PROCESS: ', error);
        }
    }

    return (
    <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid item xs={8} className='' color={"white"} paddingLeft={'5vmax'}>
                        < Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff', marginBottom: '40px'}}>
                                Sign in or create an account
                            </h2>
                            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                                <TextField 
                                    required
                                    id='login-username'
                                    label="username"
                                    defaultValue=""
                                    color="primary"
                                    className="custom-textfield"
                                    value={email}
                                    onChange={handleemailChange}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField 
                                    required
                                    id='login-password'
                                    label="password"
                                    defaultValue=""
                                    className='custom-textfield'
                                    type='password'
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div style={{marginBottom:'40px', marginTop: '40px'}}>
                                <Button variant="contained" sx={{marginRight: "1vmax"}} size='large' onClick={login}>
                                    Login
                                </Button>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                Dont have an account? <Link to="/register" onClick={resetFields}>Register</Link>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Login();
