import React from "react";
import { ProblemArray } from "./ProblemItems";
import "./Problems.css";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import Tick from "../../../Images/tick.jpg";
function Problems() {
  return (
    <div className="Problems-Main-Div">
      <div className="Problems-Div-1">
        <div className="Problem-Box-1">Status</div>
        <div className="Problem-Box-2">Title</div>
        <div className="Problem-Box-4">Solution</div>
        <div className="Problem-Box-3">Topic</div>
      </div>
      <div className="Problem-Outer-Div">
        {ProblemArray.map((item, index) => (
          <Link
            style={{ textDecorationColor: "none" }}
            to="/"
            className="Problem-Div-2"
            key={index}
          >
            <div className="Problem-Box-1">
              {item.solve == true ? (
                <SiTicktick
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "rgb(63 202 125)",
                  }}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="Problem-Box-2">{item.Title}</div>
            <div className="Problem-Box-4">solution</div>
            <div className="Problem-Box-3">{item.Topic}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Problems;
