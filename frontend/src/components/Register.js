import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Box, Container, Grid, Item, Typography, Button, TextField, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./styling/LoginRegister.css"
import { Link } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = React.useState("");
    const [displayName, setDisplayName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleUsernameChange = (event) => {
        
    }

    const handleDisplayNameChange = (event) => {
        
    }

    const handlePasswordChange = (event) => {
        
    }
  

    return (
    <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid xs={8} className='' color={"white"} paddingLeft={'5vmax'}>
                        < Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff', marginBottom: '40px'}}>
                                Register
                            </h2>
                            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                                <TextField 
                                    required
                                    id='register-username'
                                    label="username"
                                    defaultValue=""
                                    color="primary"
                                    className="custom-textfield"
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField 
                                    required
                                    id='register-display-name'
                                    label="Display Name"
                                    defaultValue=""
                                    className='custom-textfield'
                                    sx={{paddingRight: "15px"}}
                                />
                                <FormControlLabel control={<Checkbox size='large' className='custom-checkbox'/>} label="Display username"/>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField 
                                    required
                                    id='register-password'
                                    label="password"
                                    defaultValue=""
                                    className='custom-textfield'
                                    type='password'
                                />
                            </div>
                            <div style={{marginBottom:'40px', marginTop: '40px'}}>
                                <Button variant="contained" sx={{marginRight: "1vmax"}} size='large'>
                                    Register
                                </Button>
                            </div>
                        </Typography>
                    </Grid>
                    <Grid xs={4} className='' color={"white"} paddingRight={'5vmax'}>
                        <Typography className="Comments_welcome_text_2" color={"white"}>
                        <   h2 style={{color: '#007bff', marginBottom: '40px'}}>
                                Note
                            </h2>
                            <h4>
                                * username can only contain alphanumeric charcaters A-z, 0-9. It cannot contain any special characters 
                            </h4>
                            <h4>
                                * password must be at least 5 characters long
                            </h4>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Register;
