import React, { Component } from "react";
import ToDoList from "../src/Page/ToDoList";
import Add from "./Component/add";


export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      todos:[
        {
          id:0,
          text:"azerty",
          checked:false
        },
        {
          id:1,
          text:"querty",
          checked:false
        }
      ]
    }
  }

  addTodo=(todoText)=>{
    this.setState({
      todos:[...this.state.todos,{text:todoText,checked:false,id:Date.now()}]
    })

  }
  removeTodo=(id)=>{
       this.setState({
         todos:this.state.todos.filter((e,i)=>e.id!==id)
       })
  }

  completeTodo=(id)=>{
      this.setState({
        todos:this.state.todos.map((e,i)=>i===id?{...e,checked:!e.checked}:e)
      })
  }


  render() {

    return (
      <div>
       <Add addTodo={this.addTodo} />
       <ToDoList todoList={this.state.todos} delete={this.removeTodo} complete={this.completeTodo}/>
      </div>
    );
  }
}
