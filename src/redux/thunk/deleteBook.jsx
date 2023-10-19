import { removeBook } from "../BookStore/actions";

const deleteBookThunk = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });
      dispatch(removeBook(id));
    } catch (err) {
      console.log(err);
    }
  };
};

export default deleteBookThunk;
