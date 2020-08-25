import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectecolor: '#FFF' // selected default color
    }
  }

  setSelectedColor = (newColor) => { //this method updated selectedColor above with whatever is passed into it
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => ( //this recieve vals value from genMatrix after it maps through each row and extracts value of color
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />) //uses current selectedColor that can change
    //depending on what is clicked on color selector that can chnage it when clicked 
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)//next call into row div
  )

  render() {
    console.log(this.props.values[0])
    return (
    
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}