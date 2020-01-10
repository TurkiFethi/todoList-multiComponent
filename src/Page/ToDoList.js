import React, { Component } from 'react'
import '../Page/ToDoList.css'

export default class ToDoList extends Component {





    render() {
        return (
            <div className="container" >
                {this.props.todoList.map((e,i)=><div>
                <h2 className={e.checked&&"completed"}>{e.text}</h2>
    <button onClick={()=>this.props.complete(i)}>{e.checked?"Undo":"Complete"}</button>
                <button onClick={()=>this.props.delete(e.id)}>Delete</button>
                </div>
                    )}
    
            
        </div>
        )
    }
}

