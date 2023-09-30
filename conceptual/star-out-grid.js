function starOutGrid(grid) {
    let rowsToStar = [];
    let colsToStar = [];

    // Identify the rows and columns that contain a '*'
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "*") {
                rowsToStar.push(i);
                colsToStar.push(j);
            }
        }
    }

    // Star out the identified rows
    for (let i of rowsToStar) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = '*';
        }
    }

    // Star out the identified columns
    for (let j of colsToStar) {
        for (let i = 0; i < grid.length; i++) {
            grid[i][j] = '*';
        }
    }

    return grid;
}

// Test
const inputGrid = [['A', 'B', 'C'], ['D', '*', 'E'], ['F', 'G', 'H']];
console.log(starOutGrid(inputGrid));
