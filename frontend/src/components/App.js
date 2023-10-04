import "./App.css"
import {BrowserRouter as Router,Routes, Route, Link, BrowserRouter, Switch} from "react-router-dom";

import NavBar from "./NavBar.js";
import { Box, Container, Grid, Item, Typography, Button } from "@mui/material";
import Av from '../images/glogan_av.png';
import Av2 from '../images/glogan_av2.jpg';
import Contact from './Contact';
import Projects from './Projects'
import Comments from './Comments'
import Main from './Main'

function handleDownload() { 
  const pdfPath = process.env.PUBLIC_URL + 'Garry_Logan_CV.pdf'
  const link = document.createElement('a');
  link.href = pdfPath

  link.download = "Garry_Logan_CV.pdf";

  link.click();

  link.remove();

}

function handleViewCv(){
  const pdfPath = process.env.PUBLIC_URL + 'Garry_Logan_CV.pdf'

  window.open(pdfPath, '_blank');
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-padding"></div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={Main}></Route>
            <Route exact path='/Contact' element={Contact}></Route>
            <Route exact path='/Projects' element={Projects}></Route>
            <Route exact path='/Comments' element={Comments}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

{/* <Router>
  <Routes>
  <Route exact path='/Contact' element={<Contact />}></Route>
  <Route exact path='/Projects' element={<Projects />}></Route>
  <Route exact path='/Comments' element={<Comments />}></Route>
  </Routes>
</Router> */}