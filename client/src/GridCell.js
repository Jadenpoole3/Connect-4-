import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropTile } from './actions';



class GridCell extends Component {
    handleClick() {
        console.log(`Clicked on column ${this.props.x}`)

        this.props.sendTileDrop(this.props.x);
    }
    render() {
        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;

        let classes = 'cell';
        
        if (board[x][y] !== undefined) {
            if (board[x][y] === 'red') {
                classes += ' p2';
            } else {
                classes += ' p1';
            }
        }
        return (
            <div className={classes} onClick={() => this.handleClick()}>
                <p> {this.props.x}, {this.props.y}</p> 
            </div>
        );
    }
}

const stateToProps = state => {
    return{
        board: state.board //we are getting this our of storage/store 
    };
};

const dispatchToProps = dispatch => {
    return {
    sendTileDrop: col => dispatch(dropTile(col)),
        
    
    
    
    };
};

export default connect(stateToProps, dispatchToProps)(GridCell);