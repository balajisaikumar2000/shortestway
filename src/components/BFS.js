const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]

const findPath = function (grid, start, end) {
    grid[end[0]][end[1]] = ' ';
    grid[start[0]][start[1]] = 0;
    const R = grid.length;
    const C = grid[0].length;
    let distance = 0;
    let q = [start]
    while (q.length) {
        const level = [...q];
        q = [];
        for (const [r, c] of level) {
            if (r === end[0] && c === end[1]) {
                return distance;
            }
            for (const [dr, dc] of dirs) {
                if (0 <= r + dr && r + dr < R && 0 <= c + dr && c + dr <= C && grid[r + dr][c + dc] === ' ') {
                    grid[r + dr][c + dc] = distance + 1;
                    q.push([r + dr, c + dc])
                }
            }
        }
        distance += 1;
    }
    return -1;
};

function getPath(grid, start, end) {
    const distance = findPath(grid, start, end);
    if (distance === -1){
        return false;
    }
    let [r, c] = end;
    const R = grid.length;
    const C = grid[0].length;
    const path = new Set();
    while ((r !== start[0]) || (c !== start[1])) {
        for (const [dr, dc] of dirs) {
            if ((0 <= r + dr) && (r + dr < R) && (0 <= c + dc) && (c + dc < C) && (grid[r + dr][c + dc] === grid[r][c] - 1)) {
                r = r + dr;
                c = c + dc;
                path.add(r+"-"+c);
                break;
            }
        }
    }
    path.delete(r+"-"+c);
    return path
}

export default getPath;