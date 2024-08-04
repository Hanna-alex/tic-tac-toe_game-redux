
export const setField = (field) => ({ type: 'SET_FIELD', payload: field });
export const setCurrentPlayer = (player) => ({ type: 'SET_CURRENT_PLAYER', payload: player });
export const setIsGameEnded = (bool) => ({ type: 'SET_IS_GAME_ENDED', payload: bool });
export const setWinner = (winner) => ({ type: 'SET_WINNER', payload: winner });
export const setIsDraw = (bool) => ({ type: 'SET_IS_DRAW', payload: bool });
