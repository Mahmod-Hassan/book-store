import { ADD_BOOK, LOADED_BOOK, REMOVE_BOOK, UPDATE_BOOK } from "./actionTypes";

const initialState = [];

const bookStoreReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOADED_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [...state, { ...payload }];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);

    case UPDATE_BOOK:
      return state.map((book) =>
        book.id === payload.id ? { ...payload } : book
      );
    default:
      return state;
  }
};
export default bookStoreReducer;
