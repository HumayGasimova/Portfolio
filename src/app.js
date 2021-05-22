/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

/**
* Components
*/

import Main from './components/main';

/**
* Styles
*/

import './app.scss';

/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
         // <div>
            <Switch>
               <Route 
                  path="/crypto-portfolio"
                  component={ Main }
               />
               <Redirect exact from="/" to="/crypto-portfolio"/>
            </Switch>
         // </div>
      );
   }
}

export default App;
