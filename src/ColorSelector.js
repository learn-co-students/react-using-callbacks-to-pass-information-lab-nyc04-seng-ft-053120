import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // add the props callback function as a callback function defined iwthin the map, can't just put this.props.setSelectedColor(str) in the onClick in the div--doesn't work, but you can create an anonymous arrow function in the onClick and pass the params that way
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // let callback = () => this.props.setSelectedColor(str)
      return <div onClick={() => this.props.setSelectedColor(str)} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
