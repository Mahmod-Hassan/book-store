import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import addBookThunk from "../redux/thunk/addBook";
import updateBookThunk from "../redux/thunk/updateBook";

const AddBookForm = ({ isUpdate, setIsUpdate }) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    price: "",
    rating: "",
    image: "",
    featured: false,
  });

  useEffect(() => {
    if (isUpdate) {
      setNewBook(isUpdate);
    }
  }, [isUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateBookThunk(newBook));
      setIsUpdate(false);
    } else {
      dispatch(addBookThunk(newBook));
    }

    setNewBook({
      name: "",
      author: "",
      image: "",
      price: "",
      rating: "",
      featured: false,
    });
  };
  const inputHandler = (fieldName, e) => {
    switch (fieldName) {
      case "price":
        setNewBook({ ...newBook, [fieldName]: Number(e.target.value) });
        break;
      case "rating":
        setNewBook({ ...newBook, [fieldName]: Number(e.target.value) });
        break;
      case "featured":
        setNewBook((prev) => {
          return { ...newBook, [fieldName]: !prev.featured };
        });
        break;
      default:
        setNewBook({ ...newBook, [fieldName]: e.target.value });
    }
  };
  return (
    <div className="p-4 bg-white rounded-md w-4/5 h-[500px] mx-auto">
      <h4 className="mb-4 text-xl font-bold text-center">Add New Book</h4>
      <form onSubmit={submitHandler} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name">Book Name</label>
          <br />
          <input
            value={newBook.name}
            onChange={(e) => inputHandler("name", e)}
            required
            className="border w-full"
            type="text"
            name="name"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="category">Author</label>
          <br />
          <input
            value={newBook.author}
            onChange={(e) => inputHandler("author", e)}
            required
            className="border w-full"
            type="text"
            name="author"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="image">Image Url</label>
          <br />
          <input
            value={newBook.image}
            onChange={(e) => inputHandler("image", e)}
            required
            className="border w-full"
            type="url"
            name="image"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-1">
            <label htmlFor="price">Price</label>
            <br />
            <input
              value={newBook.price}
              onChange={(e) => inputHandler("price", e)}
              required
              className="border w-full"
              type="number"
              name="price"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="quantity">Rating</label>
            <br />
            <input
              value={newBook.rating}
              onChange={(e) => inputHandler("rating", e)}
              required
              className="border w-full"
              type="number"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            value={newBook.featured}
            onChange={(e) => inputHandler("featured", e)}
            type="checkbox"
            checked={newBook.featured}
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button
          type="submit"
          className="bg-emerald-500 text-white w-full py-1 rounded"
          id="submit"
        >
          {isUpdate ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};
export default AddBookForm;
