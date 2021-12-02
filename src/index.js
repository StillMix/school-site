import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppDesktop from './desktop/components/App/App.js';
import AppPhone from './phone/components/App/App.js';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     {  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 
       
        < AppPhone />
          
      :
        (
          < AppDesktop />
        )
      }
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


