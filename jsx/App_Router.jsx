import React from 'react';
import { Link } from 'react-router';

class AppRouter extends React.Component {
   render() {
      return (
         <div>
            <ul role="nav">       
               <li><Link to="home">Home</Link></li>
               <li><Link to="about">About</Link></li>
               <li><Link to="contact">Contact</Link></li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}

export default AppRouter;



