import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import Card from "../../sharedComponents/card/Card";

const WishList = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const { user, setTotalCart, toggle } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://boi-bazar-server-five.vercel.app/users-wishlist/${user?.email}`
        )
        .then((data) => {
          setWishlistData(data?.data?.wishlist);
        });
    }
  }, [user?.email, toggle]);

  setTotalCart(wishlistData?.length);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 min-h-screen">
      {wishlistData?.map((product) => (
        <Card
          key={product?._id}
          product={product}
          styles={"h-[450px]"}
          iconsStyles={"text-2xl"}
        ></Card>
      ))}
    </div>
  );
};

export default WishList;
