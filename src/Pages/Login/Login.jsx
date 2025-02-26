import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom";

export const Login = () => {
const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
 
  }
  const location=useLocation()
  const from=location.state?.from.pathname || '/'

  return (
    <div className="flex justify-center items-center min-h-screen bg-base">
      <div className="card w-full max-w-xl bg-base shadow-xl p-8">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email")}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password")}
                className="input input-bordered w-full"
                required
              />
            </div>


            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


