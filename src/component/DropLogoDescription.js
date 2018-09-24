import React from "react";
import '../scss/drop-logo-description.scss';

class DropLogoDescription extends React.Component {

    render() {
        return (
            <div className="drop-logo-description-wrapper">
                <div className="content">
                    <div className="description-header">
                        <img src="/img/upload.png" alt=""/>
                        <p>Drop Logo Here</p>
                    </div>
                    <div className="info">
                        <p>For best results we prefer vector image files:</p>
                        <p>*Ai.ai *EPS.eps *Vector.pdf *PSD.psd</p>
                    </div>
                    <div className="info">
                        <p>Alternatively, we also accept high resolution raster files:</p>
                        <p>*JPEG.jpg *PDF.pdf *PNG.png *GIF.gif</p>
                    </div>
                    <div className="warning">
                        <p>
                            Warning: Text and logo must not overlap. Actual product may look
                            different than the mockup
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropLogoDescription;