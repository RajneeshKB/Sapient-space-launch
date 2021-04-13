import React from "react";
import { Filters } from "../Filters";
import { Missions } from "../Missions";
import "./main.scss";
import { filterList } from "../../mockData/mockResponse";

const MainView = ({ missionData }) => {
  return (
    <div className="main-content h-100 d-flex">
      <div className="filter-container">
        <Filters filterList={filterList} />
      </div>
      <div className="mission-container">
        <Missions missionData={missionData} />
      </div>
    </div>
  );
};

export default MainView;
