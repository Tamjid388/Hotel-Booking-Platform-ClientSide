import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"

export const Register = () => {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
 
  }

  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="card w-full max-w-lg bg-white shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              {...register("fullname")}
              className="input input-bordered w-full"
              required
            />
          </div>

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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

    

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>

          <div className='divider'>OR</div>
          <div className="form-control mt-4">
            <button  className="btn btn-outline w-full hover:btn-ghost">
             Login With Google <span className="text-2xl "><FcGoogle /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )

}