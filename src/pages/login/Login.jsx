const Login = () => {
  return (
    <div className="relative">
      <div className="bg-[rgb(240,242,245)]">
        <section className="pt-10 md:pt-0 md:flex justify-between  items-center h-screen lg:w-[98vh] mx-auto md:gap-5 lg:gap-10 px-3">
          {/* text container */}
          <div className="md:w-1/2 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F62681] mb-2 md:mb-4">
              Chatbook
            </h1>
            <p className="text-sm md:text-[20px] lg:text-[28px] md:leading-6 lg:leading-9">
              Connect with friends and the world around you on Chatbook.
            </p>
          </div>

          {/*  login form */}
          <div className="md:w-1/2 p-3 md:p-4 lg:p-8 bg-white mt-4 md:pt-4">
            <input
              className="pl-2 w-full h-10 border "
              type="text"
              name="email"
              id=""
              placeholder="Email address or phone number"
            />{" "}
            <br />
            <input
              className="pl-2 w-full h-10 border my-3"
              type="text"
              name="password"
              id=""
              placeholder="Password"
            />
            <br />
            <input
              className="w-full bg-[#F62681] py-1 px-3 h-10 text-white"
              type="submit"
              value="Log In"
            />
            <br />
            <div className="grid justify-center">
              <a className="my-3" href="#">
                Forgotten Password
              </a>
            </div>
            <hr />
            <div className="grid justify-center my-2">
              <button className="bg-[#0671B7] text-white py-1 px-5 mx-auto w-[200px]">
                Create New Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
