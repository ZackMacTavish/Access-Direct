import React from 'react';
import Dropzone from 'react-dropzone';
import DropLogoDescription from "./DropLogoDescription";
import '../../scss/base/drop-logo-section.scss';
import {fileToBase64} from "../../util/fileUtils";

class DropLogoSection extends React.Component{

    uploadLogoHandler = async (file) => {
        const imgFile = file[0];
        const imgUrl = URL.createObjectURL(imgFile);
        const imgBase64 = await fileToBase64(imgFile);
        this.props.uploadLogo(imgBase64, imgUrl);
    };

    render(){
        return(
            <div className="drop-logo-section-wrapper">
              <div className="dropzone">
                  <Dropzone onDrop={(file) => this.uploadLogoHandler(file)}>
                      <DropLogoDescription/>
                  </Dropzone>
              </div>
            </div>
        );
    }
}

export default DropLogoSection;