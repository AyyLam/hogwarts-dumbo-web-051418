import React, {Component} from 'react';

export default class HogInfo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   }
  // }
  render() {
    return(
      <div className="ui sixteen wide column">
        <h1>{this.props.hog.name}</h1>

        <img alt={this.props.hog.specialty} src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g, '_').toLowerCase()}.jpg`)}/>
        <p>{this.props.hog.specialty}</p>
        <p>{this.props.hog.greased}</p>
      </div>
    )
  }
}
// <img src={`/src/hog-imgs/${this.props.hog.name.toLowerCase()}.jpg`}/>
