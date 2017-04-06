import React from 'react'

class AppPropsDefault extends React.Component{
    render(){
       return(
           <div> =============  ReactJS - Props- Default props ==================== 
               <h5>{this.props.header}</h5>
               <h5>{this.props.content}</h5>
           </div>
       );
    }
}

AppPropsDefault.defaultProps = {
    header : "Header will take default values",
    content: " Content will take default values"
}

export default AppPropsDefault;