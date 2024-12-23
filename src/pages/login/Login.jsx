import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/login/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  return (
    <div className="relative">
      <div className="bg-[rgb(240,242,245)]">
        <section className="pt-10 md:pt-0 md:flex justify-between  items-center h-screen lg:w-[98vh] mx-auto md:gap-5 lg:gap-10 px-3">
          {/* text container */}
          <div className="md:w-1/2 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F62681] mb-2 md:mb-4">
              বই ঘর
            </h1>
            <p className="text-sm md:text-[20px] lg:text-[28px] md:leading-6 lg:leading-9">
              লগইন করুন
            </p>
          </div>

          {/*  login form */}
          <div className="md:w-1/2 p-3 md:p-4 lg:p-8 bg-white mt-4 md:pt-4">
            <SocialLogin />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="pl-2 w-full h-10 border "
                type="text"
                {...register("email", { required: true })}
                placeholder="Email address or phone number"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-light">
                  email is required
                </p>
              )}
              <br />
              <input
                className="pl-2 w-full h-10 border my-3"
                type="text"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  password is required
                </p>
              )}
              <br />
              <input
                className="w-full bg-[#F62681] py-1 px-3 h-10 text-white"
                type="submit"
                value="Log In"
              />
            </form>
            <br />
            <div className="grid justify-center">
              <a className="my-3" href="#">
                Forgotten Password
              </a>
            </div>
            <hr />
            <div className="grid justify-center my-2">
              <Link
                to="/register"
                className="bg-[#0671B7] text-white py-1 px-5 mx-auto w-[200px]"
              >
                Create New Account
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
