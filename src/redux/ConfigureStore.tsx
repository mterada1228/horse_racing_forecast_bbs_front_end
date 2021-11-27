import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import racesDataReducer from "./ducks/racesData";

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

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares: any = [];

const reducer = combineReducers({
  racesData: racesDataReducer,
});

export type RootState = {
  racesData: {
    racesData: RacesData;
  };
};

const store = createStore(
  reducer,
  composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
);

export default store;
