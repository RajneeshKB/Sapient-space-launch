import { getAllMissions } from "../services/data-handler-service";
import { GET_MISSION_DATA, PUT_MISSION_DATA } from "./redux-constants";

export const getMissionData = (reqObj) => async (dispatch) => {
  dispatch({
    type: GET_MISSION_DATA,
  });
  const resp = await getAllMissions(reqObj);
  if (resp) {
    dispatch(putMissionData(resp));
  }
};

export const putMissionData = (data) => {
  return {
    type: PUT_MISSION_DATA,
    payload: data,
  };
};
