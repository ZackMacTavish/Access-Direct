import React from "react";
import {lang} from "../../i18/en/lang";
import ResultContainer from "../containers/ResultContainer";
import DropLogoContainer from "../containers/DropLogoContainer";
import EditLogoWrapper from "../layout/EditLogoWrapper";
import '../../scss/containers/Edit.scss';
import ShowIdPickerContainer from "../containers/ShowIdPickerContainer";
import Section from "./Section";
import EditToolsN2 from "./EditToolsN2";
import ADButton from "./ADButton";
import ADDialog from "./ADDialog";

class Edit extends React.Component {

    constructor() {
        super();
        this.state = {
            uploadLogoDialogVisible: false,
            nextStepDialogVisible: false,
        }
    }

    closeModalUploadLogo = () => {
        this.setState({
            ...this.state,
            uploadLogoDialogVisible: false,
        })
    };

    openModalNextStep = () => {
        this.setState({
            ...this.state,
            nextStepDialogVisible: true,
        })
    };

    closeModalNextStep = () => {
        this.setState({
            ...this.state,
            nextStepDialogVisible: false,
        })
    };

    handleNextStep = () => {
        this.openModalNextStep();
    };

    goToOrderScreen = () => {
        this.closeModalNextStep();
        window.scrollTo(0, 0);
        this.props.goToOrderScreen();
    };

    render() {
        return (
            <Section visible={this.props.visible} classes='edit-wrapper'>
                <div className="edit-content">
                    <div className="edit-body">
                        <div className="left">
                            <p className="title">{lang.en.result_title}</p>
                            <ResultContainer/>
                            {/*<EditStateWrapper/>*/}
                            <EditToolsN2/>
                            <p className="info">{lang.en.result_info}</p>
                        </div>
                        <div className="right">
                            {/*<AddText visible={this.props.addTextVisible}*/}
                            {/*size={this.props.addTextSize}*/}
                            {/*value={this.props.addTextValue}*/}
                            {/*changeText={this.props.changeText}*/}
                            {/*saveState={this.props.saveState}/>*/}
                            <DropLogoContainer/>
                            <ShowIdPickerContainer/>
                            <div className="bottom">
                                <EditLogoWrapper/>
                                {/*<AddComments/>*/}
                                {/*<SeePricingContainer/>*/}
                                <ADButton title={lang.en.edit.next_step} onClick={() => this.handleNextStep()}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adv">
                    <div className="adv-logo">
                        <img src='/img/LatestLogo-10.png'/>
                    </div>
                    <div className="adv-title">{lang.en.advertisement.title}</div>
                    <div className="adv-content">
                        <div className="adv-picture">
                            <a href="https://www.access-direct.net/highpowerone"
                               target="_blank">
                                <img className="pointer" src='/img/Highpoweronehomepage.png'/>
                                <p>{lang.en.advertisement.highpower}</p>
                            </a>
                        </div>
                        <div className="adv-picture">
                            <a href="https://www.access-direct.net/pneumaticswitches"
                               target="_blank">
                                <img className="pointer" src='/img/PneumaticSwitches.png'/>
                                <p>{lang.en.advertisement.switches}</p>
                            </a>
                        </div>
                    </div>
                </div>

                <ADDialog title={lang.en.dialog.please_upload_your_logo}
                          open={this.state.uploadLogoDialogVisible}
                          onClose={() => this.closeModalUploadLogo()}/>
                <ADDialog title={lang.en.dialog.is_design_finished_title}
                          open={this.state.nextStepDialogVisible}
                          onClose={() => this.closeModalNextStep()}
                          actions={[
                              {
                                  title: 'No',
                                  onClick: this.closeModalNextStep
                              },
                              {
                                  title: 'Yes',
                                  onClick: this.goToOrderScreen
                              },
                          ]}/>
            </Section>
        )
    }
}

export default Edit;