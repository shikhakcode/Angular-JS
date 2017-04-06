import React from 'react'

class AppPropsComponent extends React.Component{
    render(){
       return(
           <div>
               =============  ReactJS - Props - Component ==================== 
               <h4>{this.props.header}</h4>
               <h4>{this.props.content}</h4>
           </div>
       );
    }
}

export default AppPropsComponent;