import React from "react";
import Alert from "react-bootstrap/Alert";

const Impresie = (props) => {
  const stilAlert = {
    alert: {
      color: "#2B2B2B",
      textAlign: "left",
      margin: "10px",
      border: "2px solid #F4F4F4",
      padding: "12px",
      borderRadius: "5px",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"
    },
    head: {
      font: "20px Arial, Helvetica, sans-serif",
      fontWeight: 700
    }
  };

  const { titlu, text } = props; //  Destructurare props

  return (
    <Alert style={stilAlert.alert}>
      <Alert.Heading style={stilAlert.head}>{titlu}</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};

export default Impresie;
