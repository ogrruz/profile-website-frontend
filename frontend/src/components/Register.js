import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Box, Container, Grid, Item, Typography, Button, TextField, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./styling/LoginRegister.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {

    const [jwtToken, setJwtToken] = useContext(AuthContext);

    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [displayUsername, setDisplayUsername] = React.useState(false)
    const navigate = useNavigate();

    const resetFields = () => {
        setEmail('');
        setPassword('');
        setUsername('')
    };

    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
    }

    const handleDisplayNameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleCheckBoxClick = () => {
        setDisplayUsername(!displayUsername);
        if (!displayUsername) {
            setUsername(email);
        } 
        else {
            setUsername('');
        }

    }
    const register = async () => {
        try {
            const response = await fetch ('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    username,
                    password
                })
            });

            if(response.ok) {
                const data = await response.json();
                setJwtToken(data.token);
                console.log('REGISTRATION SUCCESSFUL');
                console.log(jwtToken)
                console.log('ACQUIRED JWT: ', data.token);
                navigate('/');

            } else {
                console.error('AUTHENTICAITON FAILED')
            }
        } catch (error) {
            console.log("ERROR DURING REGISTRATION PROCESS: ", error)
        } 
    }

    const handleRegisterButton = () => {
        register();
        resetFields();
        navigate('/')
    }
  

    return (
    <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid item xs={8} className='' color={"white"} paddingLeft={'5vmax'}>
                        < Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff', marginBottom: '40px'}}>
                                Register
                            </h2>
                            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                                <TextField 
                                    required
                                    id='register-username'
                                    label="username"
                                    color="primary"
                                    className="custom-textfield"
                                    value={email}
                                    onChange={handleUsernameChange}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField 
                                    required
                                    id='register-display-name'
                                    label="Display Name"
                                    className='custom-textfield'
                                    value={username}
                                    InputProps={{
                                        readOnly: displayUsername,
                                    }}
                                    onChange={handleDisplayNameChange}
                                />
                                <FormControlLabel sx={{paddingLeft: "15px"}} control={<Checkbox size='large' className='custom-checkbox' onClick={handleCheckBoxClick}/>} label="Display username"/>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField 
                                    required
                                    id='register-password'
                                    label="password"
                                    className='custom-textfield'
                                    type='password'
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div style={{marginBottom:'40px', marginTop: '40px'}}>
                                <Button variant="contained" sx={{marginRight: "1vmax"}} size='large' onClick={handleRegisterButton}>
                                    Register
                                </Button>
                            </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className='' color={"white"} paddingRight={'5vmax'}>
                        <Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff', marginBottom: '40px'}}>
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
