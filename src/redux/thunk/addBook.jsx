import { addBook } from "../BookStore/actions";

const addBookThunk = (newBook) => {
  function maxNumber(state) {
    state.reduce((prev, current) => Math.max(prev, current), -1) + 1;
  }
  return async (dispatch, getState) => {
    const newId = maxNumber(getState());
    const res = await fetch("http://localhost:4000/books", {
      method: "POST",
      body: JSON.stringify({ ...newBook, id: newId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const book = await res.json();

    dispatch(addBook(book));
  };
};
export default addBookThunk;
