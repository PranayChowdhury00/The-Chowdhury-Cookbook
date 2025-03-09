import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom"; 
import loginAnimation from "../../../public/login.json";
import { useLottie } from "lottie-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, loader } = useContext(AuthContext);

//   if(loader){
//     return <span className="loading loading-spinner loading-lg"></span>
//   }
  const navigate = useNavigate();
 
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        

        // Show SweetAlert Success Message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
        
      })
      .catch((error) => {
        console.error(error.message);

        // Show SweetAlert Error Message
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
          confirmButtonColor: "#f43f5e",
        });
      });
  };

  const options = {
    animationData: loginAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 py-10">
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-[350px] lg:w-[500px]">{View}</div>
      </div>

      {/* Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center">Welcome to</h2>
          <h3 className="text-3xl font-extrabold text-sky-500 text-center py-2">
            The Chowdhury Cookbook
          </h3>

          {/* Google Login Button */}
          <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg flex items-center justify-center gap-3 shadow-md hover:bg-red-600 transition duration-300">
            <FaGoogle size={20} /> Login with Google
          </button>

          {/* Divider with OR */}
          <div className="relative my-6">
            <hr className="border-gray-300" />
            <span className="absolute inset-x-0 -top-3 bg-white px-3 text-gray-500 text-sm mx-auto w-fit">
              OR
            </span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleOnSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-sky-500 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            {/* Submit Button with Loader */}
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition duration-300 flex justify-center items-center"
              disabled={loader}
            >
              {loader ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-500 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
