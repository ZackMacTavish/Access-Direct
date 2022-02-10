import React from 'react';

import './schedule.styles.scss';

import schedule from './06.png';


class Schedule extends React.Component {
    handleClick = () => {
        this.props.toggle();
        console.log('clicked schedule button')
       };
    render() {

        return (
            <div className="schedule-popup">

    <div className="modal">
            <div className="modal_content">
              <span 
              onClick={this.handleClick}
             
              className="close-schedule">&times;</span>

              <div className="flex-fish">
 <img       alt="Schedule a webinar"
            className="schedule-webinar"
            src={schedule} />

<h4
            className="please-call-title"
            >Please call Access Direct at (800) 614-3709,
            or email at info@access-direct.net</h4>

</div>
            
            </div>
         </div>
         </div>
        );
    }
}

export default Schedule;
