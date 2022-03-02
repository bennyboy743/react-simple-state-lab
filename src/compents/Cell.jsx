import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props,
            click: false
        }
    }

    changeState = () => {
        this.setState({
            value:'#333',
            clicked: true 
        })
        
    }

    render(){
        console.log(this.state.clicked)
        return (
            <div className='cell' onClick={this.changeState} style={{backgroundColor: this.state.clicked ? this.state.value : this.props.value}} >
            </div>
        )
    }
}
