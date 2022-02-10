import React from 'react';
import './herocomponent.styles.scss';

export class HeroImage extends React.Component {
    render() {
      return (
        <div >
          <img alt="A large version of the product to show detail" className="image-hero-styles" 
            src={this.props.poster} 
          />
        </div>
      );
    }
  }