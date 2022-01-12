
import React from 'react';
import pdf from '../See Formats Popup/Customer FOBproxcard_2018 (2).pdf';
import docx from '../See Formats Popup/Customer FOBproxcard_2018 (1).docx';

import './formats.styles.scss';
import Schedule from '../Schedule Webinar Popup/Schedule';



class Formats extends React.Component {
    state= {
        schedule: false
    };

    handleClick = () => {
        this.props.toggle();
        console.log('clicked format button')
       };

       toggleSchedule = () => {
        this.setState({
            schedule: !this.state.schedule
        });
    };

    render() {

        return (
            <div className="formats-popup">

    <div className="modal">
            <div className="modal_content">
              <span 
              onClick={this.handleClick}
             
              className="close-formats">&times;</span>

              <div className="flex-fish">
       
<h4
            className="formats-title-header"
            >Available Formats</h4>

            <h5 className="formats-paragraph">Cost-effective 125 KHz proximity cards and tags available in a variety of compatible formats. 
            Custom logo laser engraving included on all units, including fobs, proximity cards and clamshells, wafer tags, and wristbands. 
            Factory programmed for HID, AWID, Farpointe and other popular bit structures for all proximity cards. 
            One year warranty factory replacement against defects. Can be reprogrammed if ordered incorrectly. </h5>


                                    <div className="flex-formats-available">
                                    <h2 className="formats-paragraph-styling">
                        Available formats without lead time:<br/>
                        - H26: HID Standard 26 Bit (H10301)<br/>
                        - H33: HID 33 Bit D10202 (DSX)<br/>
                        - H34A: HID 34 Bit N10002 (Honeywell/Northern/ADT)<br/>
                        - H35: HID 35 Bit Corporate 1000<br/>
                        - H36K: HID Bit C15001 (Keyscan)<br/>
                        - H36NAL: HID Bit N901157A (Napco Gem/Alarm Lock)<br/>
                        - H37: HID 37 Bit (H10304)<br/>
                        - H37L: Long HID 37 Bit Long Format H10302<br/>
                        - H37I: HID 37 Bit I10304 (Infographics/GE Topaz)</h2>

                        <h2 className="formats-paragraph-styling">
                        - A26: AWID Standard 26 Bit Format<br/>
                        - A34: AWID 34 Bit Format<br/>
                        - A50: AWID 50 Bit Format<br/>
                        - F26: Farpointe 26 Bit Format<br/>
                        - F26MX: Farpointe 26 Bit Format w/ MaxSecure<br/>
                        - F30: Farpointe 30 Bit Format<br/>
                        - FABA: Farpointe ABA Format<br/>
                        - I26: Indala 26 Bit Format<br/>
                        - EM64: Honeywell 10 Digit 64 Bit EM format<br/>
                        - KC10X: Keri CK-10X format<br/>
                        - XSF: Kantech IOProx XSF format</h2>


                                    </div>


            <h5 className="formats-paragraph">
Click the link below for an easy order download form to send with your company logo to sales@access-direct.net. </h5>
                                    <div style={{display: 'flex'}}>

                                    <button 
                                 onClick={this.toggleSchedule}
                                className="Schedule-webinar-button3">Schedule Webinar</button>
                                {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null }

                                <a href={docx}
        download target="_blank"
      >
                                  
                                    { <button 
                                 onClick={this.toggleFormats}
                                 className="download-manual-button3">Download Order Form</button> }
                                { /*this.state.formats ? <Formats toggle={this.toggleFormats} /> : null*/} 
                                </a>
                                </div>
</div>
            
            </div>
         </div>
         </div>
        );
    }
}

export default Formats;
