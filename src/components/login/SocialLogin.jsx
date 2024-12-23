import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contextApi/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoodleLogin = () => {
    googleLogin()
      .then((user) => {
        const email = user?.user?.email;
        const role = "buyer";
        const status = user?.role === "buyer" ? "approved" : "pending";
        const wishlist = [];
        const userData = { email, role, status, wishlist };
        // sending the to db:
        axios
          .post("https://boi-bazar-server-five.vercel.app/user", userData)
          .then((res) => {
            if (res?.data?.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration successful!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col justify-center my-2">
      <button
        onClick={handleGoodleLogin}
        className="btn btn-outline btn-secondary w-full flex gap-4"
      >
        <p>
          <FcGoogle size={30} />
        </p>
        লগইন
      </button>
      <div className="divider">OR</div>
    </div>
  );
};

export default SocialLogin;
