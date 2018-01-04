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
        const title = state.current; //depending the on who turn it is 
    }
    return state;
}

export default createStore(reducer, initial);