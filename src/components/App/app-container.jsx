import React from "react";
import AppView from "./app-view";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import missionReducer from "../../redux/reducer";

const AppContainer = (props) => {
  /** creating store using reducer and thunk middleware */
  const store = createStore(
    combineReducers({ mission: missionReducer }),
    applyMiddleware(thunk)
  );

  return (
    <Provider store={store}>
      <AppView />;
    </Provider>
  );
};

export default AppContainer;
