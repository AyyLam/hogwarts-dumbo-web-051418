import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList';
import HogInfo from './HogInfo';
import hogs from '../porkers_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: hogs,
      currentHog: hogs[0],
      showOnlyGrease: false
    }
  }

  handleClick = (hog) => {
    this.setState((prevState) => {
      return {
        currentHog: hog
      }
    })
  }

  handleNameSort = () => {

    this.setState((prevState) => {
      return {
        list: prevState.list.sort((a, b) => {
          // return a.name.toUpperCase() - b.name.toUpperCase()
          if(a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1
          } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1
          } else {
            return 0
          }
        })
      }
    })
  }

  handleWeightSort = () => {
    this.setState((prevState) => {
      return {
        list: prevState.list.sort((a,b) => {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
          - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        })
      }
    })
  }

  handleGrease = () => {
    this.setState((prevState) => {
      return {
        showOnlyGrease: !prevState.showOnlyGrease
        }
      }
    )
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <button onClick={this.handleNameSort.bind(this)}>Sort By Name</button>
          <button onClick={this.handleWeightSort}>Sort By Weight</button>
          <button onClick={this.handleGrease}>Filter Greased</button>
          < HogList handleClickHog={this.handleClick} hogs={this.state.list} showOnlyGrease={this.state.showOnlyGrease}/>
          < HogInfo hog={this.state.currentHog}/>

      </div>
    )
  }
}

export default App;
