import React from 'react';


function Modal(){
    // JSX
    return(
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">Photo Name</h3>
          <img alt="current Project" />
          <p>
            Photo Description
          </p>
          <button type="button">
            Close this modal
          </button>
        </div>
      </div>
    );
}

export default Modal;