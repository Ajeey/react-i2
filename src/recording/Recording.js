import React, { Component } from 'react';
import "./Recording.css";
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';

class Recording extends Component {

  render() {
    return (
      <div className="recording-wrapper clearfix">
      	<div className="left-block">
      		<div className="script-text">{this.props.data.final_script}</div>
      	</div>
      	<div className="right-block">
          		<div className="item audio-player">
    	      		<audio controls >
    				  <source src={ this.props.data.url } type="audio/mpeg" />
    				  Your browser does not support the audio element.
    				</audio>
    			</div>

      		<div className="item rating">
      			<StarRatingComponent 
              name="rate1" 
              editing={false}
              starCount={5}
              value={this.props.data.rating}
            />
          </div>

      		<div className="item duration"><strong> Duration -  { Math.floor(this.props.data.duration/60) } minutes </strong></div>
      		<div className="item created"><strong> Created - <Moment format="DD MMM YYYY" date={new Date(this.props.data.created)} /> </strong></div>
      		
      	</div>
      	
      </div>
    );
  }
}

export default Recording;
