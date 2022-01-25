import React from "react";
import { useNavigate } from "react-router-dom";

function Func() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }

  return (
    <div>
      <button className="my-button" role="button" onClick={handleClick}>
        JOIN WAITLIST
      </button>
    </div>
  );
}

const Top5 = () => {
  return (
    <div className="top5">
      <div className="top51">
        <b>Every plans starts with a date!</b>
      </div>
      <div className="top52">
        <Func />
      </div>
    </div>
  );
};

export default Top5;
