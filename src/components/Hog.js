import React, {Component} from 'react';

export default class Hog extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   }
  // }

  render () {
    // let filePath = `../hog-imgs/${this.props.hog.name.replace(/\s/g, '_').toLowerCase()}.jpg`
    // let fileName = `require(${filePath})`
    // debugger
    // let path = {
    //   backgroundImage: `url(/static/media/mudblood.825814da.jpg)`
    return (
      <div className="ui four wide column pigTile" onClick={() => {this.props.clickedHog(this.props.hog)}}>
        <p>{this.props.hog.name}</p>
          <img alt={this.props.hog.specialty} src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g, '_').toLowerCase()}.jpg`)}/>
          
      </div>
    )
  }
}
