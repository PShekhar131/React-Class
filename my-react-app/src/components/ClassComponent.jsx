import React, {Component} from "react";


class ClassComponent extends Component{

    constructor(props){
        super(props);
    };

    state = {
        name : "Hello Prashant"
    }

    render(){
        return(
            <div>{this.state.name} {this.props.value}</div>
        )
    }
}

export default ClassComponent;