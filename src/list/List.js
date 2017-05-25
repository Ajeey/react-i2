import React, { Component } from 'react';
import "./List.css";
import axios from 'axios';
import Recording from '../recording/Recording.js';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {list: []};
  }

  componentDidMount() {
    var self = this;
    var config = {
      headers: {'Authorization': 'JWT ' + this.props.token}
    };

    axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/', config)
      .then(function (response) {
        console.log(response);
        self.setState({
          list: response.data.results
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="recordings-list">
        {this.state.list.map(function(list){
          return ( 
            <div key={list.url.toString()} >
              <Recording data={list} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default List;
