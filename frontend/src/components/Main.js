import "./styling/Main.css"
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

  const email = process.env.REACT_APP_EMAIL;
  const phone = process.env.REACT_APP_PHONE;
  const linkedin = process.env.REACT_APP_LINKEDIN;

    return (
      <Container>
        <div className="Grid_background">
          <Grid container spacing={0}>
            <Grid xs={5} color={"white"} paddingLeft={'5vmax'}>
              <Typography className="Main_welcome_text">
                <h1 >
                  Hi,I'm Garry Logan
                </h1>
                <h2 style={{color: '#007bff'}}>
                  Junior Software Developer
                </h2>
                <h5>
                  Welcome to my profile website! I'm a junior software engineer looking to dive into the software industry.
                  This website serves as a project to test and demonstrate my familiarity with basic aspects of full-stack developlment.
                  It's built through a combination of Spring Boot back-end, ReactJs front end and PostgreSQL database.
                </h5>
                <h5>
                  Please feel free to look around. You can find the code for this website at the Projects endpoint. 
                </h5>
              </Typography>
            </Grid>
            <Grid xs={7}>
              <div className="Main-av">
                <img src={Av} alt="Avatar" className="Main-av-image"/>  {/*style={{ display: { xs: 'none', md: 'flex' }, marginRight: 1, width: '48px', height: '48px'}} */}
              </div>
              <Box sx={{marginTop: '1vmax'}}>
                <Button variant="contained" sx={{borderRadius: 28, marginRight: "1vmax", fontFamily: "monospace"}} onClick={ handleViewCV}>
                  View CV
                </Button>
                <Button variant="contained" sx={{borderRadius: 28}} onClick={handleDownload}>
                Download CV
              </Button>
              </Box>
            </Grid>

            
            <Grid xs={5} color={"white"}/>
          </Grid>
        </div>

        <div className="Main-padding"></div>

        <div className="Grid_background">
          <Grid color={"white"} paddingLeft={'5vmax'}>
          < Typography className="Main_welcome_text_2" color={"white"}>
            <h2 style={{color: '#007bff'}}>
              Contact Me
            </h2>
            <h5>
              You may contact me via the following:
            </h5>
            <h5>
              Email: {email}
            </h5>
            <h5>
              Mobile: {phone}
            </h5>
            <h5>
              LinkedIn: <a href={linkedin}>linkedin.com/in/garry-logan-55aa25249</a>
            </h5>
            
          </Typography>
          </Grid>
          
        </div>
        
      </Container>
      );
}

export default Main();