import React from "react";

import "./filterPill.css";
import arrowdown from "../../assets/svg/arrow-down.svg";
import inbox from "../../assets/svg/inbox.svg";
import arrowLeftRight from "../../assets/svg/arrowLeftRight.svg";

import FilterPills from "../../utils/FilterPills";
function Filter() {
  return (
    <div className=" d-flex flex-column bg-black text-white p-1">
      <span className="container text-secondary">
        The LesnAi frens has shared{" "}
        <em className="text-white">beautiful artworks!</em>
      </span>
      <div className="container d-flex flex-column mt-5">
        <span className="text-secondary mb-3">Sort by:</span>

        <div className="container d-flex ">
          <FilterPills  src={arrowdown}/>
          <FilterPills  src={inbox}/>
          <FilterPills  src={arrowLeftRight}/>
         
          
        </div>
      </div>
    </div>
  );
}

export default Filter;
