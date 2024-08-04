const initialFieldState = Array(9).fill(null);
const initialPlayerState = {
	currentPlayer: 'X',
	isGameEnded: false,
	winner: null,
	isDraw: false,
}

export const fieldReducer = (state = initialFieldState, action) => {
	switch (action.type) {
		case 'SET_FIELD':
			return action.payload;
		default:
			return state;
	}
};


export const playerReducer = (state = initialPlayerState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: action.payload };
		case 'SET_IS_GAME_ENDED':
			return { ...state, isGameEnded: action.payload };
		case 'SET_WINNER':
			return { ...state, winner: action.payload };
		case 'SET_IS_DRAW':
			return { ...state, isDraw: action.payload };
		default:
			return state;
	}
};

