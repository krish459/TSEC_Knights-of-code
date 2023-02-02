import React from "react";

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{
          height: "100px",
          width: "100px",
          alignItems: "center",
          margin: "auto",
          marginLeft: "600px",
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
