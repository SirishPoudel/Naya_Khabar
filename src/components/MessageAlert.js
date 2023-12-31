import React from "react";

function MessageAlert(props) {
  return (
    props.alert && (
      <>
        <div className={`alert alert-${props.alert.type}`} role="alert">
          Success: {props.alert.msg}
        </div>
      </>
    )
  );
}

export default MessageAlert;
