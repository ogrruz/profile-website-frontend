import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import NavBar from "./NavBar.js";
import Contact from './Contact';
import Projects from './Projects';
import Comments from './Comments';
import Main from './Main';
import Login from './Login';
import Register from "./Register";
import { AuthProvider } from "./AuthContext.js";
import { responsiveFontSizes } from "@mui/material";

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

  //const [data, setData] = React.useState(null)

  // test for backend connectivity
  // useEffect(() => {

  //   const apiUrl = 'http://localhost:8080/api/users/jwtuser7@email.com'
    
  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer x',
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(resultData => {
  //     setData(resultData);
  //   })
  //   .then(console.log(data))
  //   .catch(error => {
  //     console.error('OH NO SOMETHING WENT WRONG', error);
  //   })
  // }, [])




  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar/>
          <div className="App-padding"></div>
          <div>
            <Routes>
                <Route key="main" exact path="/" Component={Main}></Route>
                <Route key="contact" exact path='/Contact' Component={Contact}></Route>
                <Route key="projects" exact path='/Projects' Component={Projects}></Route>
                <Route key="comments" exact path='/Comments' Component={Comments}></Route>
                <Route key="login" exact path='/Login' Component={Login}></Route>
                <Route key="register" exact path='/Register' Component={Register}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
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