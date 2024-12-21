import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  return (
    <div className="flex flex-col justify-center my-5">
      <button className="btn btn-outline btn-secondary w-full flex gap-4">
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
