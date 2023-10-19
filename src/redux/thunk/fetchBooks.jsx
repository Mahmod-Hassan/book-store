import { loadBook } from "../BookStore/actions";

const fetchBooksThunk = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/books");
    const books = await response.json();
    dispatch(loadBook(books));
  } catch (err) {
    console.log(err);
  }
};

export default fetchBooksThunk;
