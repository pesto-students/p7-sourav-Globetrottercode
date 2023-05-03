import React, { useState } from "react";
import { DisplayLink } from "./DisplayLink";

function InputArea() {
  let [inp, setInp] = useState("");
  let [displayLink, setdisplayLink] = useState("Enter a link to shorten");

  function saveInput(e) {
    setInp(e.target.value);
  }
  function handleClick() {
    fetch("https://api.shrtco.de/v2/shorten?url=" + `${inp}`)
      .then((res) => res.json())
      .then((data) => {
        setdisplayLink(data.result.full_short_link);
        console.log(data.result.full_short_link);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <div className="col-md-6 inp">
        {" "}
        <input
          onChange={saveInput}
          type="text"
          class="form-control col-md-6"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button onClick={handleClick} className="btn btn-dark">
        {" "}
        Shorten It!
      </button>
      <DisplayLink link={displayLink} />
    </>
  );
}

export { InputArea };
