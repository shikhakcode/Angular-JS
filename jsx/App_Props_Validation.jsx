import React from 'react'

class AppPropsValidation extends React.Component {
   render() {
      return (
         <div> 
             =============  ReactJS - Props - Validtion  ==================== 
            <h5>Array: {this.props.propArray}</h5>
            <h5>Bool: {this.props.propBool ? "True..." : "False..."}</h5>
            <h5>Func: {this.props.propFunc(3)}</h5>
            <h5>Number: {this.props.propNumber}</h5>
            <h5>String: {this.props.propString}</h5>
            <h5>Object: {this.props.propObject.objectName1}</h5>
            <h5>Object: {this.props.propObject.objectName2}</h5>
            <h5>Object: {this.props.propObject.objectName3}</h5>
         </div>
      );
   }
}

AppPropsValidation.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}

AppPropsValidation.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",
	
   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}

export default AppPropsValidation;