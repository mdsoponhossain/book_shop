import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contextApi/AuthProvider";
const SocialLogin = () => {
  const { googleLogin, user } = useContext(AuthContext);
  console.log(user?.displayName, 1234567);
  const handleGoodleLogin = () => {
    googleLogin();
  };
  return (
    <div className="flex flex-col justify-center my-5">
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
