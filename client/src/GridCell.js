import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dropTile} from './actions'
class GridCell extends Component {

    handleClick() {
        console.log(`clicked on column ${this.props.x}`)

        this.props,sendTileDrop(this.props.x);
    }
    render() {
        return (
            <div className="cell" onClick={() => this.handleClick()}>
                <p> {this.props.x}, {this.props.y}</p> 
            </div>
        );
    }
}

const stateToProps = state => {
    return{};
};

const dispatchToProps = dispatch => {
    return {
    sendTileDrop: col => dispatch[dropTile(col)],
    
    
    };
};

export default connect(stateToProps, dispatchToProps) (GridCell);