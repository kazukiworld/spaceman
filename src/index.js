import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './space3.jpg';


ReactDOM.render(
  <Suspense fallback={ <div style={{backgroundImage:`url(${Background})`}}/>}>
  <App/>
  </Suspense>,
document.getElementById('root')
);
