import React from "react";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";
import "./Strip.css";
const Strip = () => {
  const { inrd } = useContext(Data);
  return (
    <div className="strip-container py-5" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row">
          {inrd?.data?.content_boxes?.map((items, index) => {
            return (
              <div className="col-6 col-lg-3" data-aos="zoom-in" key={index}>
                <h1>{items.bold_text}</h1>
                <p>{items.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Strip;
