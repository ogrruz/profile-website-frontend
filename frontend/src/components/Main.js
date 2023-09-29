import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar.js";
import { Box, Container, Grid, Item, Typography, Button } from "@mui/material";
import Av from '../images/glogan_av.png';
import Av2 from '../images/glogan_av2.jpg';
import Contact from './Contact'
import Projects from './Comments'
import Comments from './Projects'

function handleDownload() { 
  const pdfPath = process.env.PUBLIC_URL + 'Garry_Logan_CV.pdf'
  const link = document.createElement('a');
  link.href = pdfPath

  link.download = "Garry_Logan_CV.pdf";

  link.click();

  link.remove();

  // window.open(pdfPath, '_blank');

}

function handleViewCV() {
  const pdfPath = process.env.PUBLIC_URL + 'Garry_Logan_CV.pdf'
  window.open(pdfPath, '_blank');
}

function Main(){
    return (
        <div className="App">
          <Container>
            <Grid container spacing={0}>
              <Grid xs={5} color={"white"} paddingLeft={'5vmax'}>
                <Typography className="App_welcome_text">
                  <h1 >
                    Hi, I'm Garry Logan
                  </h1>
                  <h2 >
                    Junior Software Developer
                  </h2>
                  <h5 >
                    Welcome to my profile website! I'm a junior software engineer looking to dive into the software industry.
                    This website serves as a project to test and demonstrate my familiarity with basic aspects of full-stack developlment.
                    It's built through a combination of Spring Boot back-end and ReactJs front end.
                  </h5>
                  <h5>
                    Please feel free to look around. You can find the code for this website at the Projects endpoint. 
                  </h5>
                  <h5>
                    Here are some useful links:
                  </h5>
                </Typography>
              </Grid>
              <Grid xs={7}>
                <div className="App-av">
                  <img src={Av} alt="Avatar" className="App-av-image"/>  {/*style={{ display: { xs: 'none', md: 'flex' }, marginRight: 1, width: '48px', height: '48px'}} */}
                </div>
              </Grid>
              <Grid xs={5} color={"white"} paddingLeft={'5vmax'} className="MuiGrid-root-2" >
                <Button variant="contained" sx={{borderRadius: 28}} href="/Contact" >
                  Contact Me
                </Button>
              </Grid>
              <Grid xs={7} className="MuiGrid-root-2">
                <Button variant="contained" sx={{borderRadius: 28}} onClick={handleDownload}>
                  Download CV
                </Button>
              </Grid>
              <Grid xs={5} className="MuiGrid-root-3"></Grid>
              <Grid xs={7} paddingBottom={"20vmax" } className="MuiGrid-root-3">
                <Button variant="contained" sx={{borderRadius: 28}} onClick={ handleViewCV} >
                  View CV
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      );
}

export default Main();