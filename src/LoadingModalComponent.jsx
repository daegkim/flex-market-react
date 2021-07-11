import './LoadingModal.css';
import { useState } from 'react';

function LoadingComponent(props) {
  //state
  //custom method
  //return
  if (props.isLoading) {
    return (
      <div className="loading-modal">
        <div className={"loading-modal-content"}>
          <div className={"loading-modal-container"}>
            <div className={"loading-modal-main"}></div>
          </div>
        </div>
        <div className="loading-modal-layer">
        </div>
      </div>
    );
  }
  else {
    return false;
  }
}

export default LoadingComponent;