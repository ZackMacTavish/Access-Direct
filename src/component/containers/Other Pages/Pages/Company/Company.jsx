import React from 'react'
import pictures from './Pictures.png';
import ourstory from './OurStory.svg';
import './Company.styles.scss';
import join from '../Company/Join.png';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';
import Footer from '../../Components/Footer/Footer.component';


class Company extends React.Component {
    state= {
        seen: false
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    render() {
        
        
        return (
            <div className="style-reset">
                 <div className="Join-us-Section">

                 <div className="header-paragraph-container">
                            <h1 className="highpower-header">
                               Join Us
                            </h1>

                            <p className="paragraph-text-highpower">
                           Become part of our team, and help us on our quest of problem solving, and delivering top notch security solutions.

​​                             </p>
                            <div className="button-flexed-company">

                            <button 
                                 onClick={this.togglePop}
                                className="Schedule-webinar-button2">Schedule Webinar</button>
                                {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}
                               
                                <a style={{textDecoration:'none'}} href="https://www.info.access-direct.net/leadership" >
                                <button className="download-manual-button2">Learn more about us</button>
                                </a>
                            
                            </div>
                            </div>

            <img alt="The team members of Access Direct" className="join-us-img" src={join} />



            </div>




        <div className="flexed-Company">
  


            <h2 className="header-color">Your consultants in the security industry. <br />Helping you with hardware, or installation.
            </h2>

            <img alt="An array of different products Access Direct carries" className="pictures-styling" src={pictures} />

            
        </div>


<div className="gradient-box">
<h2 className="our-story-header">Our story</h2>
<h3 className="our-story-text">Massachussetts-based Access Direct pioneered Access Control, and today we lead the industry in our dedication to doing it responsibly.

We provide real-time access control for everyday hardworking people.

At Access Direct, we believe everyone should have access to simple and trustworthy access control services. Access Direct and its businesses were built on the principle of providing convenient, reliable services by using the most innovative technology available. Supported by it's unique staff, and state-of-the-art technology, Access Direct has the unique tools to meet each customer’s needs.</h3>

<img alt="A graphic showing construction workers, and locksmiths in a city" className="ourstory" src={ourstory} />



</div>

<div className="Videos-Section">


<div className="blue-box">
    <h2 className="video-text">
    Access Direct has released a series of videos on Youtube to explain our products and process.
    </h2>
    </div>

    <div className="div-center">
<iframe className="embedded-video" src="https://www.youtube.com/embed/DSKRaNFDBvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>

<Footer />
</div>
           
        );
    }
}

export default Company;