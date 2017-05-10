import React, { Component } from 'react'
import { css } from 'glamor'
import GoogleMapsLoader from 'react-google-maps-loader'
import GooglePlacesSuggest from "react-google-places-suggest"
import Dimension from './Dimension'
import 'react-google-places-suggest/lib/index.css'

const MY_API_KEY = "AIzaSyCd-rij5bpJ4r5IRBY2_Ysd_Y0poxBDmWI"

const getStyle = () => ({
  input: css`
    & + ul {
      top: 0;
      margin: 5px 5px 5px 0px;
      border: 1px solid;
    }
    & + ul > li {
      list-style: none;
    }
  `
})

class PlaceDimension extends Component {
  state = {
    search: "",
    selectedCoordinate: null,
  }
 
  handleSearchChange = (e) => {
    this.setState({search: e.target.value})
  }
 
  handleSelectSuggest = (suggest, coordinate) => {
    const { onChange } = this.props
    onChange(suggest.description)
    this.setState({search: suggest.description, selectedCoordinate: coordinate})
  }

  componentDidMount() {
    this.input.focus();
  }
 
  render() {
    const {search} = this.state
    const {googleMaps} = this.props
    const styles = getStyle()
 
    return (
      <div style={{position: 'absolute', top: 2, left: 5, margin: 0, padding: 0, height: '100%', width: '100%'}}>
        <GooglePlacesSuggest
          googleMaps={googleMaps}
          onSelectSuggest={this.handleSelectSuggest}
          search={search}
          suggestTypes={['(cities)']}
        >
          <input
            type="text"
            value={ search }
            ref={(input) => { this.input = input; }} 
            placeholder="Any place"
            onChange={ this.handleSearchChange }
          />
        </GooglePlacesSuggest>
      </div>
    )
  }
}

export default Dimension(GoogleMapsLoader(PlaceDimension, {
  libraries: ["places"],
  key: MY_API_KEY,
}))