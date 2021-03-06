// You are given a map in form of a two-dimensional integer grid where 1
// represents land and 0 represents water. Grid cells are connected horizontally/vertically
// (not diagonally). The grid is completely surrounded by water, and there is exactly
// one island (i.e., one or more connected land cells). The island doesn't have
// "lakes" (water inside that isn't connected to the water around the island).
// One cell is a square with side length 1. The grid is rectangular, width and height
// don't exceed 100. Determine the perimeter of the island.

// Example:

// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Answer: 16
// Explanation: The perimeter is the 16.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    return grid.reduce((total, row, rowIndex) => {
        total += row.reduce((subtotal, block, index) => {
            if (block === 0) {
                return subtotal;
            };
            let surround = [row[index - 1], row[index + 1]];
            if (grid[rowIndex + 1]) {
                surround.push(grid[rowIndex + 1][index]);
            } else {
                surround.push(undefined);
            };
            if (grid[rowIndex - 1]) {
                surround.push(grid[rowIndex - 1][index]);
            } else {
                surround.push(undefined);
            };
            surround = surround.reduce((shared, border) => {
                if (border === 0 || border === undefined) {
                    shared += 1;
                };
                return shared;
            }, 0);
            subtotal += surround;
            return subtotal;
        }, 0);
        return total;
    }, 0);
};