import React, {Component} from 'react';
import '../../scss/containers/App.scss';

import FobTemplatePicker from "./FobTemplatePicker";
import EditContainer from "./EditContainer";
import OrderContainer from "./OrderContainer";
import Footer from '../../component/containers/Other Pages/Components/Footer/Footer.component';

class fobPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="App">
                <FobTemplatePicker visible={this.props.displayFobTemplatePicker}/>
                <div className="flex-center">
                    <EditContainer/>
                    <OrderContainer/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default fobPage;