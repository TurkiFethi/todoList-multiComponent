import React, { Component } from 'react'

export default class add extends Component {
    constructor(props){
        super(props)
        this.state={
            text:""
        }
    }

    handleChange=(event)=>{
        this.setState({
            text:event.target.value
        })
    }

    render() {
        
        return (
            <div className="container-input">
            <h1>To-Do App!</h1>
            <span>Add New To-Do </span>
           
            <input className="input" type="text" placeholder="Enter new task" onChange={this.handleChange} value={this.state.text} />
            <input type="button" value="Add" onClick={()=>{this.props.addTodo(this.state.text);this.setState({text:""})}}/>
  
            
        </div>
        )
    }
}