import { createSelector } from "reselect";

export const selectMission = (state) => {
  return state.mission;
};

export const makeSelectIsLoading = () =>
  createSelector(selectMission, (mission) => mission.isLoading);

export const makeSelectMissionData = () =>
  createSelector(selectMission, (mission) => mission.missionData);
