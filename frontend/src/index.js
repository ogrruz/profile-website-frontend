import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

      // <AuthProvider>
      //   <BrowserRouter>
      //     <App />
      //   </BrowserRouter>
      // </AuthProvider>