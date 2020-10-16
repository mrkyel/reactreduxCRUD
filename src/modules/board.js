const GETBOARDS = "board/GETBOARDS";
const BOARD_SAVE = "board/BOARD_SAVE";

export const getboards = () => ({ type: GETBOARDS });
export const board_save = () => ({ type: BOARD_SAVE });

const initialState = {
  board_id: null,
  user_id: null,
  title: null,
  context: null,
  regDt: null,
  updatedt: null,
};

function board(state = initialState, action) {
  switch (action.type) {
    case GETBOARDS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default board;
