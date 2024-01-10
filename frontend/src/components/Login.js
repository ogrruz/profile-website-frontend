import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Box, Container, Grid, Item, Typography, Button } from "@mui/material";
import "./styling/LoginRegister.css"

function Login() {

  

  return (
    <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid xs={8} className='' color={"white"} paddingLeft={'5vmax'}>
                        < Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff'}}>
                                Comments
                            </h2>
                            <h4>If you have a comment or suggestion with regards the UI / UX of the site and / or the code behind it please leave them here!</h4>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Container>
  );
};

export default Login();
