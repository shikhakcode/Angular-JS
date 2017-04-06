import React from 'react'

class AppJSX extends React.Component{
   render(){
      {/* Way of adding Style */} 
     var myStyle = {
         fontSize: 20,
         color: '#FF0000'
      }

      var i = 1;

       return(
          <div>
            =============  ReactJS - JSX ==================== 
            <h2 style = {myStyle}>Hello World !!</h2>
            <h4>{i == 2 ? 'true' : 'false'}</h4>
             {/* Way of adding comment */}
             {/*End of the line Comment...*/}   
          </div>
       );
   }
}

export default AppJSX;