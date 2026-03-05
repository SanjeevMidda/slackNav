import React from "react";

const Query = ({ statusColors }) => {
  console.log(statusColors);

  return (
    <>
      <div className="queryContainer">
        <div
          className="queryStatus"
          style={{
            background: `linear-gradient(${statusColors[0].colorOne}, ${statusColors[0].colorTwo})`,
          }}
        ></div>
        <input type="text" />
      </div>
      <p>Raise on Card-Ops channel</p>
    </>
  );
};

export default Query;
