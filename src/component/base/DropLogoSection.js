import React from 'react';
import Dropzone from 'react-dropzone';
import DropLogoDescription from "./DropLogoDescription";
import '../../scss/base/drop-logo-section.scss';

class DropLogoSection extends React.Component{

    uploadLogoHandler = (file) => {
        const userLogoImg = URL.createObjectURL(file[0]);
        this.props.uploadLogo(userLogoImg);
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