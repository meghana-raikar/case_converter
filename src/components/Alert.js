import React from "react";

const Alert = (props) => {
  const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    // used this  outer div to overcome the shifting problems cumulative layput shift
    <div style={{height : "50px"}}>  
    {/* props.alter && is used to check the condition it will execute only when the alert condition is true */}
   { props.alert && 
      <div
        className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalized(props.alert.typ)}</strong> {props.alert.msg}
      </div>
      
    }
    </div>
  );
};

export default Alert;
