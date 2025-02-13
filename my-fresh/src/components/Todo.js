import React, {useState} from "react";

function Todo(props){
    function handleDelete () {
        console.log("Clicked");
        console.log(props.title)
    }

    return(
        <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
}

export default Todo;