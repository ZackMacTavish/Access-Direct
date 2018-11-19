import React from 'react';
import Draggable from 'react-draggable';
import '../../scss/base/fobo-result.scss';
import Section from "./Section";
import {IMG_SOURCE_PATH} from "../../const/images";


class FoboResult extends React.Component {

    constructor() {
        super();

        this.baseImgRef = React.createRef();
        this.userImgRef = React.createRef();
    }

    initBase = () => {
        let width = this.baseImgRef.current.offsetWidth;
        let height = this.baseImgRef.current.offsetHeight;
        this.props.initBase(width, height);
    };

    initLogo = () => {
        let width = this.userImgRef.current.offsetWidth;
        let height = this.userImgRef.current.offsetHeight;
        this.props.initLogo(width, height);
    };


    render() {
        const width = this.props.buildLogoProperties.userLogoWidth;
        var imgStyle = null;

        if (width == 0 || width == null) {
            imgStyle = {
                transform: 'rotate(' + this.props.buildLogoProperties.rotation + 'deg)',
            };
        } else {
            imgStyle = {
                transform: 'rotate(' + this.props.buildLogoProperties.rotation + 'deg)',
                width: width,
            };
        }

        const x = this.props.buildLogoProperties.userLogoX;
        const y = this.props.buildLogoProperties.userLogoY;

        return (
            <div className="fobo-result-wrapper">
                <div className="fobo-result">
                    <div className="base-img">
                        <img ref={this.baseImgRef} onLoad={() => this.initBase()} src={IMG_SOURCE_PATH + this.props.buildLogoProperties.baseImgName}/>
                    </div>
                    <Draggable position={{x: x, y: y}}
                               onStop={(event, dragElement) => this.props.setLogoPosition(dragElement.x, dragElement.y)}>
                        <div className="logo-img">
                            <img style={imgStyle} ref={this.userImgRef} onLoad={() => this.initLogo()}
                                 src={this.props.userLogoImgUrl}/>
                        </div>
                    </Draggable>
                    <div>
                        <img className="base-cover-img" src={IMG_SOURCE_PATH + this.props.buildLogoProperties.baseCoverImgName}/>
                    </div>
                    <div className="fobo-id">
                        <div className="option-w">
                            <Section classes="option id-v" visible={this.props.productOrder.facilityCodeDisplay}>FC255</Section>
                            <Section classes="option id-v" visible={this.props.productOrder.formatDisplay}>HD26</Section>
                        </div>
                        <div className="mandatory id-v">12345</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoboResult;