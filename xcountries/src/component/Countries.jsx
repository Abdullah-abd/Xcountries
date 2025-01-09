import React from "react";

export default function Countries({Data}) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5px",
        textAlign: "center",
        borderRadius: "10px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"200px",
        height:"200px"
      }}
    >
      <div>
        <img
          src={Data.flag}
          alt="country_flag"
          style={{ width: "100px", height: "100px",  }}
        />
      </div>
      <h3>{Data.name}</h3>
    </div>
  );
}
