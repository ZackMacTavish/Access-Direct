import React from 'react';
import '../../scss/base/fob-template-picker.scss';
import {lang} from "../../i18/en/lang";
import Section from "../base/Section";
import {setTemplate} from '../../store/actions/editActions';
import {connect} from 'react-redux';
import * as Image from '../../const/templates';

class FobTemplatePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             displayTemplates: false
        }
    }

    toggleTemplatesDisplay = () => {
        const displayTemplatesState = this.state.displayTemplates;
        this.setState({
            displayTemplates: !displayTemplatesState
        })
    };

    userSelectedFobHandler = (base, cover) => {
      this.props.setTemplate(base, cover);
      this.setState({
        displayTemplates: false
      })
    };

    render() {
        return (
            <Section visible={this.props.visible} classes='FobTemplatePicker-wrapper'>
                <div className={this.state.displayTemplates ? 'FobTemplatePicker-content border' : 'FobTemplatePicker-content'}>
                    <div className="FobTemplatePicker-header">
                        <div onClick={this.toggleTemplatesDisplay} className="FobTemplatePicker-button">
                            <div className="FobTemplatePicker-angle"><div className="FobTemplatePicker-angle-left"></div></div>
                            <div className="FobTemplatePicker-button-text">
                                Pick your fob template
                            </div>
                            <div className="FobTemplatePicker-angle"><div className="FobTemplatePicker-angle-right"></div></div>
                        </div>
                        <Section classes="FobTemplatePicker-note" visible={this.state.displayTemplates}>{lang.en.fob_template_picker.note}</Section>
                    </div>
                    <Section visible={this.state.displayTemplates} classes="FobTemplatePicker-templates">
                        <img onClick={() => this.userSelectedFobHandler(Image.BLACK_FOB_BASE_1, Image.BLACK_FOB_COVER)}
                          src={Image.BLACK_FOB_BASE_1} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.BLACK_FOB_BASE_2, Image.BLACK_FOB_COVER)}
                          src={Image.BLACK_FOB_BASE_2} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.BLACK_FOB_BASE_3, Image.BLACK_FOB_COVER)}
                          src={Image.BLACK_FOB_BASE_3} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.BLACK_FOB_BASE_4, Image.BLACK_FOB_COVER)}
                          src={Image.BLACK_FOB_BASE_4} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.BLACK_FOB_BASE_5, Image.BLACK_FOB_COVER)}
                             src={Image.BLACK_FOB_BASE_5} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.BLACK_FOB_BASE_6, Image.BLACK_FOB_COVER)}
                             src={Image.BLACK_FOB_BASE_6} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.GRAY_FOB_BASE, Image.GRAY_FOB_COVER)}
                          src={Image.GRAY_FOB_BASE} alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Image.RED_FOB_BASE, Image.RED_FOB_COVER)}
                          src={Image.RED_FOB_BASE} alt=""/>
                    </Section>
                </div>
            </Section>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTemplate: (base, cover) => dispatch(setTemplate(base, cover))
  }
};

export default connect(null, mapDispatchToProps)(FobTemplatePicker);
