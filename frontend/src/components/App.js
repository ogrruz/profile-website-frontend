import "./App.css"
import {BrowserRouter as Router,Routes, Route, BrowserRouter} from "react-router-dom";

import NavBar from "./NavBar.js";
import Contact from './Contact';
import Projects from './Projects'
import Comments from './Comments'
import Main from './Main'
import Register from './Register.js';
import Login from './Login.js';
import { AuthProvider } from "./AuthContext.js";

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
      <Routes>
          <Route exact path="/" element={Main}></Route>
          <Route exact path='/Contact' element={Contact}></Route>
          <Route exact path='/Projects' element={Projects}></Route>
          <Route exact path='/Comments' element={Comments}></Route>
          <Route exact path='/Login' element={Login}></Route>
          <Route exact path='/Register' element={Register}></Route>
      </Routes>
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