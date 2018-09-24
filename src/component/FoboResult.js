import React from 'react';
import Draggable from 'react-draggable';
import '../scss/fobo-result.scss';

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

        if(width == 0 || width == null){
            imgStyle = {
                transform: 'rotate(' + this.props.rotate + 'deg)',
            };
        }else {
            imgStyle = {
                transform: 'rotate(' + this.props.rotate + 'deg)',
                width: this.props.width,
            };
        }

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
                </div>
            </div>
        )
    }
}

export default FoboResult;