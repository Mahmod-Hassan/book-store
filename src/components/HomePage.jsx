import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooksThunk from "../redux/thunk/fetchBooks";
import AddBookForm from "./AddBookForm";
import Navbar from "./Navbar";
import SingleBook from "./SingleBook";

export default function HomePage() {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [searchText, onSearch] = useState("");
  const books = useSelector((state) => state);

  // load books
  useEffect(() => {
    dispatch(fetchBooksThunk);
  }, [dispatch]);

  // feature filter
  const featureFiltering = (book) => {
    if (filterFeatured) {
      return book.featured;
    } else {
      return true;
    }
  };

  const searchFiltering = (book) => {
    if (searchText) {
      return book.name.toLowerCase().includes(searchText.toLocaleLowerCase());
    } else {
      return true;
    }
  };

  return (
    <div>
      <Navbar onSearch={onSearch} />
      <main className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex justify-between items-center my-10">
            <h1 className="font-bold text-lg">Book List</h1>
            <div className="space-x-2">
              <button
                onClick={() => setFilterFeatured(false)}
                type="button"
                className={`${
                  !filterFeatured && "bg-emerald-500"
                } py-1 px-5 border border-emerald-500 rounded-2xl`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilterFeatured(true)}
                className={`${
                  filterFeatured && "bg-emerald-500"
                } py-1 px-5 border border-emerald-500 rounded-2xl`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {books?.length >= 1
              ? books
                  .filter(featureFiltering)
                  .filter(searchFiltering)
                  .map((book) => (
                    <SingleBook
                      key={book.id}
                      book={book}
                      setIsUpdate={setIsUpdate}
                    />
                  ))
              : "No book found"}
          </div>
        </div>

        <AddBookForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      </main>
    </div>
  );
}
