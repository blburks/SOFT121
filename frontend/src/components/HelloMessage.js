import React from "react";

function HelloMessage({ message }) {
  return (
    <div>
      <h2>Backend says:</h2>
      <p>{message}</p>
    </div>
  );
}

export default HelloMessage;