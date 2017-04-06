import React from 'react'

class AppCompnent extends React.Component {
    render(){
        return(
            <div>
                {/* Component with out state (state less) example */}
                =============  ReactJS - Component - State less ==================== 
                <Header />
                <Content />
            </div>    
        );
    }

}

class Header extends React.Component {
    render(){
        return(
            <div><h4>Welcome to State less example ..!!</h4>Welcome to header ..!!</div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>Welcome to contents ..!!</div>
        );
    }
}

export default AppCompnent;