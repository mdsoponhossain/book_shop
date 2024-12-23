import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const MyProducts = () => {
  const [mybooks, setMybooks] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://boi-bazar-server-five.vercel.app/books/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMybooks(data));
    }
  }, [user?.email, toggle]);

  const handleDelete = (id) => {
    const deleteBook = async () => {
      const res = axios.delete(
        `https://boi-bazar-server-five.vercel.app/books/delete/${id}`
      );

      setToggle(!toggle);
    };
    deleteBook();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {mybooks?.map((book) => (
              <tr key={book?._id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={book?.image} alt="book loading..." />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50">{book?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{book?.brand}</td>
                <td>{book?.price}</td>
                <td>{book?.category}</td>
                <td className="btn btn-secondary btn-outline mr-4">
                  <Link to={`/dashboard/books/${book?._id}`}>Edit</Link>
                </td>
                <td
                  onClick={() => handleDelete(book?._id)}
                  className="btn btn-secondary btn-outline ml-4"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
