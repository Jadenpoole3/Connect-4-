import { createStore} from 'redux'

//intial restart button or 
const initial = {
    //the user current I can do this with a boolean or string I think??
    current: 'red', // can also be black color too 
    board: [  //im going to make it so that will be array in array with colum for each one 
        [], //col 0    
        [], // col 1
        [], // col 2
        [], // col 3
        [], // col 4
        [], // col 5
        [], // col 6 
    ],
};

function reducer(state, action) {
    //any time a player drops a tile Im going to make it so It will go from true to false using the boolean method 
    if(action.type === 'DROP_TILE') {
        console.log('dropping onto col ' + action.payload);
        const title = state.current; //depending the on who turn it is the color title its going in 
        const col = state.board[action.payload].concat(title); //look this part up our new col as well 
        const board = state.board.slice(); // copying the board directing and cant change the board directly
        board[action.payload] = col;  //we dont want a copy just a copy with the update with the new tile

        return {
            current: state.current === 'red' ? 'black' : 'red',  //if the current player color is red then make him turn black and if he is red then make him black
            board: board,
        };
    }
    return state;
}

export default createStore(reducer, initial);