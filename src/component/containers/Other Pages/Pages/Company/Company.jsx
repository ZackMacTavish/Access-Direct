import React from 'react'
import Header from '../../../../base/Header'
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component'
import pictures from './Pictures.png';
import ourstory from './OurStory.svg';
import './Company.styles.scss';

export default function Company() {
    return (
        <div className="style-reset">
        <div className="flexed-Company">
   {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }


            <h2 className="header-color">Your consultants in the security industry. <br />Helping you with hardware, or installation.
            </h2>

            <img className="pictures-styling" src={pictures} />

            
        </div>


<div className="gradient-box">
<h2 className="our-story-header">Our story</h2>
<h3 className="our-story-text">Access Direct is a multinational company based in the U.S that uses technology to develop access control systems for individuals and businesses. 
We have unique employees, and customer service capabilities that let us rapidly evaluate new solutions to offer our clients access control to their companies.</h3>

<img className="ourstory" src={ourstory} />



</div>
</div>
    )
}
