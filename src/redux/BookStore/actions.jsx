import { ADD_BOOK, LOADED_BOOK, REMOVE_BOOK, UPDATE_BOOK } from "./actionTypes";

export const loadBook = (books) => {
  return {
    type: LOADED_BOOK,
    payload: books,
  };
};
export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
};
export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
};
export const updateBook = (updatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: updatedBook,
  };
};
