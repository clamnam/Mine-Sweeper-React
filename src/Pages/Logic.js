import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Logic = () => {
	const [grid, setGrid] = useState([]);
	const [showCell, setShowCell] = useState(false);
	const emoji = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];

	const { id } = useParams();
	const difficulty = {
		easy: [10, 10, 10],
		medium: [16, 16, 10],
		hard: [16, 30, 99],
	};

	const makeGrid = (difficulty) => {
		return Array.from({ length: difficulty[0] }, () =>
			Array.from({ length: difficulty[1] }, () => ["❌", "0️"])
		);
	};

	const addMines = (difficulty, currentGrid) => {
		let x;
		let y;
		let coords = [];
		for (let i = 0; i < difficulty[2]; i++) {
			x = Math.floor(Math.random() * difficulty[0]);
			y = Math.floor(Math.random() * difficulty[1]);
			coords.push([x, y]);
		}

		coords.forEach(([x, y]) => {
			currentGrid[x][y][1] = "💣";
		});

		return currentGrid;
	};

	const handleClick = (cell) => {
		let celly = parseInt(cell[1], 10);
		if (Number.isInteger(celly)) {
			const updatedGrid = [...grid];
			cell[0] = emoji[celly];
			setGrid(updatedGrid);
		} else {
			console.log("dead");
		}
	};

	const renderGrid = () => {
		return (
			<div className="mx-96 content-center overflow-hidden	">
				{grid.map((row, rowIndex) => (
					<div key={rowIndex} className="flex">
						{row.map((cell, cellIndex) => (
							<div
								className=" bg-blue-400 border-spacing-2 border-neutral-500"
								key={cellIndex}
								onClick={() => handleClick(cell)}
							>
								<div className="">{cell[0] === "❌" ? cell[0] : cell[1]}</div>
							</div>
						))}
					</div>
				))}
			</div>
		);
	};

	useEffect(() => {
		if (difficulty[id]) {
			const currentDifficulty = difficulty[id];
			const newGrid = makeGrid(currentDifficulty);
			const gridWithMines = addMines(currentDifficulty, newGrid);
			setGrid(gridWithMines);
		}
	}, [id]);

	return <>{renderGrid()}</>;
};

export default Logic;
