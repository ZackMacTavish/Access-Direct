import React from "react";
import '../../scss/base/add-text.scss';
import EditButton from "./EditButton";
import {lang} from "../../i18/en/lang";
import TextField from "@material-ui/core/es/TextField/TextField";
import Section from "./Section";
import {TOGGLE_ADD_TEXT_DISPLAY} from "../../const/actions";

class AddText extends React.Component{
    render(){
        return (
          <div className = "add-text-wrapper">
              <div className = "element button-section">
                  <EditButton img="/icons/AddText.png" text={lang.en.edit.add_text} action={TOGGLE_ADD_TEXT_DISPLAY}/>
              </div>
             <Section visible={this.props.visible}>
                 <div className="element text-section">
                     <TextField
                         id="outlined-multiline-flexible"
                         label="Add text"
                         multiline
                         rowsMax="4"
                         value={this.props.value}
                         onChange={this.props.changeText}
                         onBlur={this.props.saveState}
                         margin="normal"
                         variant="outlined"
                     />
                 </div>
                 <div className="element font-size-section">
                     <div className="font-size-input">
                         <input type="text" pattern="\d*" maxLength="2" value={this.props.value}/>
                     </div>
                     <div className="font-size-buttons">
                         <div>+</div>
                         <div>-</div>
                     </div>
                 </div>
             </Section>
          </div>
        );
    }
}

export default AddText;