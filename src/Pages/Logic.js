import { useParams } from "react-router-dom";

const Logic = () => {
    let { id } = useParams();
    let grid;
    const difficulty = {
        easy: [10, 10, 10],
        medium: [16, 16, 10],
        hard: [16, 30, 99],
    };

    const makeGrid = (difficulty) => {
        let a = [];
        for (let i = 0; i < difficulty[0]; i++) {
            let b = [];
            for (let j = 0; j < difficulty[1]; j++) {
                b.push([null, 0, 0]); // Change this line to create cells with [null, 0, 0] structure
            }
            a.push(b);
        }
        return a;
    };

    const addMines = (difficulty, grid) => {
        let x;
        let y;
        let coords = [];
        for (let i = 0; i < difficulty[2]; i++) {
            x = Math.floor(Math.random() * difficulty[0]);
            y = Math.floor(Math.random() * difficulty[1]);
            coords.push([x, y]);
        }

        coords.forEach(([x, y]) => {
            grid[x][y][1] = 9;
        });

        return grid;
    };

    const renderGrid = () => {
        return (
            <div>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <span key={cellIndex}>{cell}</span>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    if (difficulty[id]) {
        let currentDifficulty = difficulty[id];

        grid = makeGrid(currentDifficulty);
        grid = addMines(currentDifficulty, grid);

        return renderGrid();
    }

    return <>pass {grid && <>{grid}</>}</>;
};

export default Logic;
