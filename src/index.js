import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import TemplateProvider from './template/templateProvider'
import ContextProvider from './components/context/ContexProvider'
import {Provider} from 'react-redux'
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}> 
  <TemplateProvider>
  <ContextProvider>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
    
  </ContextProvider>
  </TemplateProvider>
  </Provider>
 ,
  document.getElementById('root')
);

