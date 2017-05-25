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
      <div className="recording-wrapper">
      	<div className="left-block">
      		<div className="script">{	this.splitFinalScript(this.props.data.final_script) }</div>
      	</div>
      	<div className="right-block">
      		<div className="audio-player">
	      		<audio controls >
				  <source src={ this.props.data.url } type="audio/mpeg" />
				  Your browser does not support the audio element.
				</audio>
			</div>

      		<div className="rating">
      			<StarRatingComponent 
                    name="rate1" 
                    editing={false}
                    starCount={this.props.data.rating}
                    value={this.props.data.rating}
                />
            </div>

      		<div className="duration">Duration -  <strong>{ Math.floor(this.props.data.duration/60) } </strong> minutes</div>
      		<div className="created">Created - { this.props.data.created }</div>
      		
      	</div>
      	
      </div>
    );
  }
}

export default Recording;
