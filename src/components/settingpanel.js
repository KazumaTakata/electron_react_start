import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import { togle_panel } from "../state/action/index";
import update from 'immutability-helper';

class SettingPanel extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            inputValue: {
                URI: "",
                name: "",
                password: ""
            }
        }

        this.togle_panel = this.togle_panel.bind(this)
        this.settingHandle = this.settingHandle.bind(this)
    }

    togle_panel(){
        console.log("click")
        this.props.togle_panel()
    }

    settingHandle(e){
        
        this.setState( update(this.state, {inputValue: {[e.target.name]:{$set: e.target.value }} } ))
    }

    render() {
        return (
            <div>
            {  this.props.state.settingpanel.open &&
            <div class="settingpanel__container">
                <button onClick={this.togle_panel}>X</button>
                URI
                <input type="text" name="URI" value={this.state.inputValue.URI} onChange={this.settingHandle} />
                USERNAME
                <input type="text" name="name" value={this.state.inputValue.name} onChange={this.settingHandle} />
                PASSWORD
                <input type="text" name="password" value={this.state.inputValue.password} onChange={this.settingHandle} />
                <input type="submit" value="SET"/>
            </div>
            }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      state : state
    }
  }
  
const mapDispatchToProps = dispatch => {
return {
    togle_panel: ()=>dispatch(togle_panel())
    }
}
  
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(SettingPanel)



