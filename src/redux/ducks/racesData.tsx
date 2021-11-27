import racesOftheWeekDay1 from "../../../datas/races_of_the_week_day1";

export const SET_RACES_DATA = "teamly/settings/SET_RACES_DATA";

type RacesData = {
  races: {
    race_id: number;
    race_course: string;
    round: string;
    race_name: string;
    course_type: string;
    length: number;
    population: number;
  }[];
};

type Action = {
  type: string;
  racesData: RacesData;
};

const initialState = {
  racesData: racesOftheWeekDay1,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_RACES_DATA:
      const { racesData } = action;
      return {
        ...state,
        racesData,
      };
    default:
      return state;
  }
};

export const setRacesData = (racesData = racesOftheWeekDay1) => ({
  type: SET_RACES_DATA,
  racesData,
});

export default reducer;
