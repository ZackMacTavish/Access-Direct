import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import RRedux from './store/config/store';

ReactDOM.render(<RRedux/>, document.getElementById('root'));
registerServiceWorker();
