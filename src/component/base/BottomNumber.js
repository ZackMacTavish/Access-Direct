import React from 'react';
import '../../scss/base/bottom-number.scss';

const BottomNumber = (props) => {
    return (
      <span className="bottom-number">
          {props.children}
      </span>
    );
};

export default BottomNumber;