import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Header from './components/header';
import DatabaseList from "./components/databaselist";
import Databasesql from "./components/databasesql";
import store from "./state/store/index";
import "./css/index.scss";
import SettingPanel from './components/settingpanel';

const Index = () => {
  return <Provider store={store}> 
            <Header/>
         </Provider>;
};

ReactDOM.render(<Index />, document.getElementById("index"))