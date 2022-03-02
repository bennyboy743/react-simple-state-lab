import React, { Component } from 'react';
import Cell from './compents/Cell';

export default class Matrix extends Component {
  genRow = (vals) => {
    console.log(`this is Gen Row ${vals}`)
    return vals.map(val => <div className="cell"> <Cell value={val}  /></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    console.log(`this is Gen Matrix ${this.props.values}`)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    console.log("This is a test")
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
