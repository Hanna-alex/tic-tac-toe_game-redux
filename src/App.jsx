import './App.css'
import { Field } from './components/Field.js'
import { Information } from './components/Information.js'

import { useDispatch, useSelector } from 'react-redux';
import { setField, setCurrentPlayer, setIsGameEnded,setWinner, setIsDraw} from './redux/actions.js'


export const Game = () => {
	const dispatch = useDispatch();

	 const field = useSelector((state) => state.field);
	 const { currentPlayer, isGameEnded, winner, isDraw } = useSelector((state) => state.player);

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6],
	];

	const changeState = (arr) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
				dispatch(setIsGameEnded(true));
				dispatch(setWinner(arr[a]));
				return;
			}
		}
		if (!arr.includes(null)) {
			dispatch(setIsDraw(true));
		}
	};

	const clickField = (index) => {
	if (isGameEnded || field[index] || isDraw) return;

    const fieldCopy = [...field];
    fieldCopy[index] = currentPlayer;

    dispatch(setField(fieldCopy));
    dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
    changeState(fieldCopy);
	};

	const startAgain = () => {
		dispatch(setField(Array(9).fill(null)));
		dispatch(setCurrentPlayer('X'));
		dispatch(setIsGameEnded(false));
		dispatch(setIsDraw(false));
	};

	return (
		<div className='wrapper'>
			<Information winner={winner} player={currentPlayer} isEnd={isGameEnded} isDraw={isDraw} />
			<Field field={field} clickField={clickField} />
			{(isGameEnded || isDraw) ?
			 <button  className='btnStart'  onClick={startAgain}>Начать заново</button> :  <div className='btnDisablet'></div>
			}
		</div>
	);
};

// cd ./tic-tac-toe_game
