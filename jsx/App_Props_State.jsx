import React from 'react';

class AppPropsState extends React.Component{
   constructor(props){
     super(props);
     
     this.state = {
        header: "Header from state and props !!",
        content: "Content from state and props !!"
     }
   }

    render(){
        return(
            <div>
                =============  ReactJS - Props and state ==================== 
                <Header headerProps = {this.state.header}></Header>
                <Content contentProps = {this.state.content}></Content>
            </div>
        );
    }

}

class Header extends React.Component{
    render(){
        return(
            <div>{this.props.headerProps}</div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>{this.props.contentProps}</div>
        );
    }
}

export default AppPropsState;