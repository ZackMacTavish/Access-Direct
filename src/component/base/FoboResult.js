import React from 'react';
import Draggable from 'react-draggable';
import '../../scss/base/fobo-result.scss';
import Section from "./Section";
import TextField from "@material-ui/core/es/TextField/TextField";

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
        const width = this.props.width;
        var imgStyle = null;

        console.log('NeEEEEEE');
        console.log(this.props.rotation);

        if (width == 0 || width == null) {
            imgStyle = {
                transform: 'rotate(' + this.props.rotation + 'deg)',
            };
        } else {
            imgStyle = {
                transform: 'rotate(' + this.props.rotation + 'deg)',
                width: this.props.width,
            };
        }

        console.log(imgStyle);

        return (
            <div className="fobo-result-wrapper">
                <div className="fobo-result">
                    <div className="base-img">
                        <img ref={this.baseImgRef} onLoad={() => this.initBase()} src={this.props.baseImg}/>
                    </div>
                    <Draggable position={{x: this.props.x, y: this.props.y}}
                               onStop={(event, dragElement) => this.props.setLogoPosition(dragElement.x, dragElement.y)}>
                        <div className="logo-img">
                            <img style={imgStyle} ref={this.userImgRef} onLoad={() => this.initLogo()}
                                 src={this.props.userLogoImg}/>
                        </div>
                    </Draggable>
                    <div>
                        <img className="base-cover-img" src={this.props.baseCoverImg}/>
                    </div>
                    <div className="fobo-id">
                        <div className="option-w">
                            <Section classes="option id-v" visible={this.props.facilityCodeDisplay}>FC255</Section>
                            <Section classes="option id-v" visible={this.props.formatDisplay}>HD26</Section>
                        </div>
                        <div className="mandatory id-v">12345</div>
                    </div>
                    {/*<div className="add-text-result">*/}
                        {/*<TextField*/}
                            {/*id="outlined-multiline-flexible"*/}
                            {/*multiline*/}
                            {/*value={this.props.addTextValue}*/}
                            {/*// onChange={this.props.changeText}*/}
                            {/*// onBlur={this.props.saveState}*/}
                            {/*margin="normal"*/}
                            {/*variant="outlined"*/}
                        {/*/>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default FoboResult;