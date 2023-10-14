import React from "react";

function Task(props){

    return (

        <li
          key={props.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
              }`}
            title={props.description}
          >
            {props.title}
          </span>
          <span>
            <button
              // onClick={() => this.editItem(item)}
              className="btn btn-secondary mr-2"
            >
              Edit
            </button>
            <button
              // onClick={() => this.handleDelete(item)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </span>
        </li>

    );
  }

  export default Task;