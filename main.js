import React from 'react';
import ReactDOM from 'react-dom';
//import App from './jsx/App.jsx';
import AppHelloWorld from './jsx/App_HelloWorld.jsx';
import AppJSX from './jsx/App_JSX.jsx';
import AppComponent from './jsx/App_Component.jsx';
import AppState from './jsx/App_State.jsx';
import AppPropsComponent from './jsx/App_Props_Component.jsx';
import AppPropsDefault from './jsx/App_Props_Default.jsx';
import AppPropsState from './jsx/App_Props_State.jsx';
import AppPropsValidation from './jsx/App_Props_Validation.jsx';
import AppComponentApi from './jsx/App_Component_API.jsx';
import AppComponentLifeCycle from './jsx/App_Component_LifeCycle.jsx';
import AppForms from './jsx/App_Forms.jsx';
import AppEvent from './jsx/App_Event.jsx';
import AppRef from './jsx/App_Ref.jsx';
import AppKey from './jsx/App_Key.jsx';

import AppHome from './jsx/router/App_Home.jsx';
import AppAbout from './jsx/router/App_About.jsx';
import AppContact from './jsx/router/App_Contact.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import AppRouter from './jsx/App_Router.jsx';


//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<AppHelloWorld />, document.getElementById('appHelloWorld'));
ReactDOM.render(<AppJSX />, document.getElementById('appJsx'));
ReactDOM.render(<AppComponent />, document.getElementById('appComponent'));
ReactDOM.render(<AppState />, document.getElementById('appState'));
ReactDOM.render(<AppPropsComponent 
                      header="Header value from component !!" 
                      content="Content value from component !!" />, 
                      document.getElementById('appPropsComponent'));

ReactDOM.render(<AppPropsDefault />, document.getElementById('appPropsDefault'));
ReactDOM.render(<AppPropsState />, document.getElementById('appPropsState'));
ReactDOM.render(<AppPropsValidation />, document.getElementById('appPropsValidation'));
ReactDOM.render(<AppComponentApi />, document.getElementById('appComponentApi'));
ReactDOM.render(<AppComponentLifeCycle />, document.getElementById('appComponentLifeCycle'));
setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('appComponentLifeCycle'));}, 10000)

ReactDOM.render(<AppForms/>, document.getElementById('appForm'));
ReactDOM.render(<AppEvent/>, document.getElementById('appEvent'));
ReactDOM.render(<AppRef/>, document.getElementById('appRef'));
ReactDOM.render(<AppKey/>, document.getElementById('appKey'));


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {AppRouter}>
        <Route path = "home" component = {AppHome}></Route>
        <Route path = "about" component = {AppAbout} />
        <Route path = "contact" component = {AppContact} />
      </Route>
   </Router>
	
), document.getElementById('appRouter')); 

