import React, { Component } from 'react';
import "./List.css";
import axios from 'axios';
import Recording from '../recording/Recording.js';
import Strings from '../strings/strings.js';

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

    axios.get(Strings.recordingsUrl, config)
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
