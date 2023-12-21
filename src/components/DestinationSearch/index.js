// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {inputValues: ''}

  onChangeResult = event => {
    this.setState({inputValues: event.target.value})
  }

  render() {
    const {inputValues} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputValues.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={inputValues}
            onChange={this.onChangeResult}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
        <div>
          <ul className="image-card-items-container">
            {searchResult.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
