import React from 'react'

class AppState extends React.Component {
    constructor(){

        super();

        this.state = {
            data:[
               {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },

                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },
                    
                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ]
        }
        
    }

    render(){
      return(
         <div>
               <br></br>
                {/* Component with state (state full) example */}
                <Header />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                        {/* function(person, i) { } */}
                    </tbody>
                </table>
           </div>    
        );
    }

}

class Header extends React.Component {
    render(){
        return(
            <div>
            <div>=============  ReactJS - State full ==================== </div>
            <div>Welcome to State Full example ..!!</div>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td> 
            </tr>
        );
    }
}

export default AppState;