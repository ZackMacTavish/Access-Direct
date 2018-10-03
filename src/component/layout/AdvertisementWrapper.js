import React from "react";
import '../../scss/layout/advertisement-wrapper.scss';
import {lang} from "../../i18/en/lang";

class AdvertisementWrapper extends React.Component{
    render(){
        return(
            <div className="advertisement-wrapper">
                <div className="logo">
                    <img src='/img/LatestLogo-10.png'/>
                </div>
                <div className="advertisement-title">
                    <h1>{lang.en.advertisement.title}</h1>
                </div>
                <div className="pictures">
                    <div className="picture">
                            <img src='/img/Highpoweronehomepage.png'/>
                            <p>{lang.en.advertisement.highpower}</p>
                    </div>
                    <div className="picture">
                            <img src='/img/PneumaticSwitches.png'/>
                            <p>{lang.en.advertisement.switches}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvertisementWrapper;