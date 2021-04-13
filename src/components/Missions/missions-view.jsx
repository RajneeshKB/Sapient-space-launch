import React from "react";
import CardView from "./Card/card-view";

const MissionContainer = ({ missionData }) => {
  return (
    <div className="d-flex flex-wrap h-100 overflow-auto ml-3">
      {missionData &&
        missionData.map((data) => {
          return <CardView key={data.label} data={data} />;
        })}
    </div>
  );
};

export default MissionContainer;
