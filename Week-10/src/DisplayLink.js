import React from "react";

function DisplayLink(props) {
  function handleClick() {
    navigator.clipboard.writeText(props.link);
  }
  return (
    <>
      {" "}
      <div className="display">
        <span className="link">{props.link}</span>
        <button
          onClick={handleClick}
          className="btn btn-outline-secondary link-btn"
        >
          Copy
        </button>
      </div>{" "}
    </>
  );
}

export { DisplayLink };
