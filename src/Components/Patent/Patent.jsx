import React from "react";

const Patent = () => {
  return (
    <div className="fixed-container" style={{ overflowX: "hidden" }}>
      <div className="container py-5 text-center d-flex align-items-center justify-content-center flex-column text-light">
        <h1 className="mb-4" style={{ fontSize: "4vmin", fontWeight: "700" }}>
          Patent & Research
        </h1>
        <p className="w-100 patent">
          5ire works with leading researchers in blockchain technology and
          human-centered design. We hold patents in several areas of blockchain
          technology and regularly publish in peer-reviewed journals.
        </p>
      </div>
    </div>
  );
};

export default Patent;
