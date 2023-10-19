import { updateBook } from "../BookStore/actions";

const updateBookThunk = (modifiedBook) => {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:4000/books/${modifiedBook.id}`, {
      method: "PATCH",
      body: JSON.stringify(modifiedBook),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedBook = await res.json();
    dispatch(updateBook(updatedBook));
  };
};
export default updateBookThunk;
