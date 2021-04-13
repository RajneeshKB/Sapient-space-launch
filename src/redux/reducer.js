const { GET_MISSION_DATA, PUT_MISSION_DATA } = require("./redux-constants");

const initialState = {
  isLoading: false,
  missionData: [],
};

const missionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MISSION_DATA:
      return { ...state, isLoading: true, missionData: [] };
    case PUT_MISSION_DATA:
      return { ...state, isLoading: false, missionData: payload };
    default:
      return { ...state };
  }
};

export default missionReducer;
