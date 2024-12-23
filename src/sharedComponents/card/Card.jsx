import { GiEternalLove } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";
import { BsCart2 } from "react-icons/bs";
import "./card.css";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const Card = ({ styles, iconsStyles, cardPadding, product }) => {
  const { user } = useContext(AuthContext);
  const handleWishList = async (product) => {
    if (user?.email) {
      const res = await axios.post(
        `https://boi-bazar-server-five.vercel.app/books/cart/${user?.email}`,
        { product }
      );
      console.log(res?.data);
      if (res?.data?.modifiedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Added to WishList",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      console.log("res?.data");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please login first",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      className={`card-container drop-shadow-sm bg-base-100 ${cardPadding} 
         hover:text-red-500 overflow-hidden hover:cursor-pointer  h-fit w-full md:w-[98%]`}
    >
      <div className={`overflow-hidden ${styles}`}>
        <figure id="cardImage" className=" h-full w-full relative ">
          <div className="h-full  w-full bg-black bg-opacity-0 hover:bg-opacity-40 z-10 absolute">
            {/* icons container */}
            <div
              className={`text-white  font-bold ${iconsStyles} bookAttachedIcons z-50`}
            >
              <div
                onClick={() => handleWishList(product)}
                className="p-2 rounded-full hover:bg-red-700 bg-black my-[28%]  text-white"
              >
                <GiEternalLove></GiEternalLove>
              </div>

              <div className="p-2 rounded-full hover:bg-red-700 bg-black my-[28%]  text-white">
                <FaSearch></FaSearch>
              </div>

              <div className="p-2 rounded-full hover:bg-red-700 bg-black my-[28%]  text-white">
                <PiShareNetworkFill></PiShareNetworkFill>
              </div>

              <div
                onClick={() => handleWishList(product)}
                className="p-2 rounded-full hover:bg-red-700 bg-black my-[28%]  text-white"
              >
                <BsCart2></BsCart2>
              </div>
            </div>
          </div>
          <img
            className="w-full h-full "
            src={product?.image}
            alt="loading..."
          />
        </figure>
      </div>
      <div className=" text-center h-fit my-1 pb-1">
        <p className="text-sm">{product?.name}</p>
        <p className="text-md"> {product?.author}</p>
        <p className="text-sm">{product?.price} টাকা/-</p>
      </div>
    </div>
  );
};

export default Card;
