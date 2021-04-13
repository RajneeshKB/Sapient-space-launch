/** Format data received from server in desired format */
const formatData = (data) => {
  return data.map((d) => {
    return {
      label: `${d.mission_name} #${d.flight_number}`,
      missionIds: [...d.mission_id],
      launchYear: d.launch_year,
      launchSuccess: d.launch_success,
      landSuccess: d.rocket.first_stage.cores[0].land_success,
      imageLink: d.links.mission_patch,
    };
  });
};

/** Fetch data from server using filter options provided */
export const getAllMissions = async (reqObj) => {
  let apiUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
  for (let filter in reqObj) {
    if (reqObj[filter]) {
      apiUrl = apiUrl + `&${filter}=${reqObj[filter]}`;
    }
  }
  return fetch(apiUrl)
    .then((resp) => resp.json())
    .then((data) => formatData(data));
};
