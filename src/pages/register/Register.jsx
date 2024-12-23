import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/login/SocialLogin";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data?.email;
    const role = data.role;
    const status = data?.role === "buyer" ? "approved" : "pending";
    const wishlist = [];
    const userData = { email, role, status, wishlist };

    createUser(data.email, data.password).then(() => {
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
    });
  };

  return (
    <div className="relative h-fit">
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
          <div className="md:w-1/2 p-3 md:p-4 lg:p-6 bg-white mt-2 md:pt-4">
            <SocialLogin />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body m-0 p-0"
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-light">
                    email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm font-light">
                    password is required
                  </p>
                )}

                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-sm font-light">
                    password must has 6 digit length
                  </p>
                )}
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "Your password do not match";
                      }
                    },
                  })}
                />

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm font-light">
                    password do not match
                  </p>
                )}
              </div>

              {/* user role */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Select role</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("role", { required: true })}
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm font-light">
                    You must select a role
                  </p>
                )}

                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-sm font-light">
                    password must has 6 digit length
                  </p>
                )}
              </div>

              <p className="font-light text-sm">
                Have an account? Please{" "}
                <Link className="text-primary " to="/login">
                  Login
                </Link>
              </p>
              <br />
              <input
                className="btn w-full bg-[#F62681] py-1 px-3 h-10 text-white"
                type="submit"
                value="Register"
              />
            </form>
            <br />

            <hr />
            <div className="grid justify-center my-2">
              <Link to="/login">
                <button className="bg-[#0671B7] text-white py-1 px-5 mx-auto w-[200px]">
                  Login Account
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
