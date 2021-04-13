import React, { useState } from "react";
import { YearFilter } from "./YearFilter";
import { LaunchFilter } from "./LaunchFilter";
import { LandingFilter } from "./LandingFilter";
import { LANDING_FILTER, LAUNCH_FILTER, YEAR_FILTER } from "./constants";
import { getMissionData } from "../../redux/action";
import { connect } from "react-redux";
import "./filterview.scss";

const FilterView = ({ filterList, getAllMissionData }) => {
  //store all selected filters in state, and use it for data fetching
  const [selectedFilters, updateSelectedFilters] = useState({
    [YEAR_FILTER]: null,
    [LAUNCH_FILTER]: null,
    [LANDING_FILTER]: null,
  });

  //mapping of filter components with options received from mock data
  const filterOptionMapping = {
    YearFilter,
    LaunchFilter,
    LandingFilter,
  };

  const getFilteredData = (option, value) => {
    //get filterd data based on selected filters passed
    const newFIlteredOptions = { ...selectedFilters };
    if (newFIlteredOptions[option] === value) {
      newFIlteredOptions[option] = null;
    } else {
      newFIlteredOptions[option] = value;
    }
    getAllMissionData(newFIlteredOptions);
    updateSelectedFilters(newFIlteredOptions);
  };

  const FilterComp = filterList.map(({ id, name, values }) => {
    //get filter component to render using mapping declared above
    const FilterCompName = filterOptionMapping[name] || null;
    return (
      <FilterCompName
        key={id}
        options={values}
        onFilter={getFilteredData}
        selectedFilters={selectedFilters}
      />
    );
  });

  return (
    <div className="bg-white rounded h-100 overflow-auto py-1 px-2 filter-view">
      <h6 className="m-0 pl-2 pt-1">Filters</h6>
      {FilterComp}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { getAllMissionData: (reqObj) => dispatch(getMissionData(reqObj)) };
};

export default connect(null, mapDispatchToProps)(FilterView);
