import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
    return (
      <Spinner className="spinner-border text-light" animation="border" variant="light" role="status">
      <span  className="visually-hidden">Loading...</span>
    </Spinner>
    );
  }
  
  export default Loading;

  