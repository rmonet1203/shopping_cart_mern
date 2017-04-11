import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {browserHistory, Router} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ItemStore from './stores/ItemStore';

function render(){

  ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    app
  );

}

ItemStore.onChange(function(){
  render();
});

render();




