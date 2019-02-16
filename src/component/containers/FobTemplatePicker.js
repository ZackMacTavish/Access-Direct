import React from 'react';
import '../../scss/base/fob-template-picker.scss';
import {lang} from "../../i18/en/lang";
import Section from "../base/Section";
import {setTemplate} from '../../store/actions/editActions';
import * as Template from '../../const/images';
import {connect} from 'react-redux';

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
                <div className="FobTemplatePicker-content">
                    <div className="FobTemplatePicker-header">
                        <div onClick={this.toggleTemplatesDisplay} className="FobTemplatePicker-button">Pick your fob template</div>
                        <Section classes="FobTemplatePicker-note" visible={this.state.displayTemplates}>{lang.en.fob_template_picker.note}</Section>
                    </div>
                    <Section visible={this.state.displayTemplates} classes="FobTemplatePicker-templates">
                        <img onClick={() => this.userSelectedFobHandler(Template.BLACK_FOB_TEMPLATE_BASE_1, Template.BLACK_FOB_TEMPLATE_COVER)}
                          src="/img/template/black_fob_1.png" alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Template.BLACK_FOB_TEMPLATE_BASE_2, Template.BLACK_FOB_TEMPLATE_COVER)}
                          src="/img/template/black_fob_2.png" alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Template.BLACK_FOB_TEMPLATE_BASE_3, Template.BLACK_FOB_TEMPLATE_COVER)}
                          src="/img/template/black_fob_3.png" alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Template.BLACK_FOB_TEMPLATE_BASE_4, Template.BLACK_FOB_TEMPLATE_COVER)}
                          src="/img/template/black_fob_4.png" alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Template.GRAY_FOB_TEMPLATE_BASE, Template.GRAY_FOB_TEMPLATE_COVER)}
                          src="/img/template/gray_fob.png" alt=""/>
                        <img onClick={() => this.userSelectedFobHandler(Template.RED_FOB_TEMPLATE_BASE, Template.RED_FOB_TEMPLATE_COVER)}
                          src="/img/template/red_fob.png" alt=""/>
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
