import React, {Component} from 'react';

import Hog from './Hog';

export default class HogList extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  makeHogs = () => {
    return this.props.hogs.map((hogData) => this.props.showOnlyGrease ?
    (hogData.greased ? <Hog key={hogData.id} clickedHog={this.props.handleClickHog} hog={hogData} /> : null)
  : <Hog key={hogData.id} clickedHog={this.props.handleClickHog} hog={hogData} />  )
  }

  render () {
    return (
      <div className='ui grid container'>
        {this.makeHogs()}
      </div>
    )
  }



}
