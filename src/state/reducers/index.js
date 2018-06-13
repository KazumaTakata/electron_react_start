import { fromJS } from "immutable";


const initialState = {
  settingpanel: {
    open: true,
    uri: "",
    port: "" 
  }
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGILSETTINGPANEL":
      let TOGLEPANELSTATE = fromJS(state);
      let TOGLEPANELSTATE1 = TOGLEPANELSTATE.updateIn(["settingpanel", "open"], flag => !flag )
      return  TOGLEPANELSTATE1.toJS()
    default:
      return state;
  }
};
export default rootReducer;