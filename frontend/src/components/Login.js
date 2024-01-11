import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Box, Container, Grid, Item, Typography, Button, TextField } from "@mui/material";
import "./styling/LoginRegister.css"
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
    <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid xs={8} className='' color={"white"} paddingLeft={'5vmax'}>
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
                                />
                            </div>
                            <div style={{marginBottom:'40px', marginTop: '40px'}}>
                                <Button variant="contained" sx={{marginRight: "1vmax"}} size='large'>
                                    Login
                                </Button>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                Dont have an account? <Link to="/register">Register</Link>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Login;
