import React from "react";
import '../styles/loading.css';

function Loading() {
    return (
      <div className="spinner-border text-light" animation="border" variant="light" role="status">
      <span  className="visually-hidden"></span>
    </div>
    );
  }
  
  export default Loading;

  