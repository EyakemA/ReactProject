import React, {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props){
    const [showModel, setShowModel] = useState(false);


    function handleDelete () {
        setShowModel(true);
    }

    function closeModal(){
        setShowModel(false)
    }

    return(
        <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
        {showModel && <Modal onCancel={closeModal} onConfirm={closeModal}/> }
        {showModel && <Backdrop onClickBackDrop={closeModal}/>}
      </div>
    );
}

export default Todo;