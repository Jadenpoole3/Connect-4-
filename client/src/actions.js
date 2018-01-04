
//when the user clicks on a colum and token will drop in the column
export function dropTile(col) {
return {
    type: 'Drop_TILE',
    payload: col,
};

}