import React from 'react';

class AppEvent extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }

   render() {
      return (
         <div>
            <div> =============  ReactJS - Event ==================== </div>
            <div>
                <button onClick = {this.updateState}>CLICK</button>
                <h4>{this.state.data}</h4>
            </div>
         </div>
      );
   }
}

export default AppEvent;