import React, { Component } from 'react';
import "./Recording.css";
import StarRatingComponent from 'react-star-rating-component';

class Recording extends Component {


	splitFinalScript(script) {
		console.log(script);
		return script;
	}

  render() {
    return (
      <div className="recording-wrapper clearfix">
      	<div className="left-block">
      		<div className="script-text">{	this.splitFinalScript(this.props.data.final_script) }</div>
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

      		<div className="item duration">Duration -  <strong>{ Math.floor(this.props.data.duration/60) } </strong> minutes</div>
      		<div className="item created">Created - { this.props.data.created }</div>
      		
      	</div>
      	
      </div>
    );
  }
}

export default Recording;
