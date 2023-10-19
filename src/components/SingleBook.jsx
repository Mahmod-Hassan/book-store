import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import deleteBookThunk from "../redux/thunk/deleteBook";
const SingleBook = ({ book, setIsUpdate }) => {
  const dispatch = useDispatch();

  const { name, author, price, image, id, featured, rating } = book;

  const handleDelete = () => {
    dispatch(deleteBookThunk(id));
  };

  const ratingStar = [];
  for (let i = 1; i <= rating; i++) {
    ratingStar.push(<FaStar className="text-orange-500" />);
  }
  return (
    <div className="flex shadow-md bg-white">
      <img alt="" width={170} height={258} src={image} />

      <div className="flex-1 p-2 flex flex-col justify-center ">
        <div>
          <div>
            <div>
              {featured ? (
                <span className="text-emerald-500 rounded px-1 font-semibold bg-emerald-500/25">
                  featured
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={() => setIsUpdate(book)}>
                <FaEdit />
              </button>
              <button
                className="hover:text-red-500 cursor-pointer"
                onClick={handleDelete}
              >
                {" "}
                <FaTrashAlt />
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-4 h-full">
            <h4 className="font-semibold">{name}</h4>
            <p>{author}</p>
            <div className="flex">{ratingStar}</div>
            <p className="text-emerald-500 font-bold">BDT {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleBook;
