import React, { useEffect } from "react";
import MainView from "./main-view";
import { connect } from "react-redux";
import { getMissionData } from "../../redux/action";
import { createStructuredSelector } from "reselect";
import {
  makeSelectIsLoading,
  makeSelectMissionData,
} from "../../redux/selectors";
import Loader from "../Loader/loader";

const MainContainer = ({
  missionData,
  missionDataLoading,
  getAllMissionData,
}) => {
  /** useEffect for getting all mission data on first render only */
  useEffect(() => {
    getAllMissionData();
  }, [getAllMissionData]);

  return (
    <>
      {missionDataLoading && <Loader />}
      <MainView missionData={missionData} />
    </>
  );
};

//using reselect library for memorized selector creation
const mapStateToProps = createStructuredSelector({
  missionDataLoading: makeSelectIsLoading(),
  missionData: makeSelectMissionData(),
});

//dispatch action to get all mission data
const mapDispatchToProps = (dispatch) => {
  return { getAllMissionData: (reqObj) => dispatch(getMissionData(reqObj)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
