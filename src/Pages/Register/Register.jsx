import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { Authcontext } from "../../Providers/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const {user,createUser,
    signinwithGoogle,UpdateProfile}=useContext(Authcontext)
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser = result.user;
        console.log(loggedUser);
      UpdateProfile(data.name, data.photoUrl)
      .then(()=>{
        const userInfo={
          name:data.name,
          email:data.email,
          photo:data.photoUrl

        }
        axios.post('https://hotel-booking-platform-server.vercel.app/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire("Signup Successfull")
            navigate('/')
            
          }
        })
      
      })
    })
 
  }
  function handleGoogleLogin(){
    signinwithGoogle()
  .then(result=>{
    console.log(result.user)
    const userInfo={
      name:result.user?.name,
      email:result.user?.email

    
    }
    axios.post('/users',userInfo)
    .then(res=>{
      Swal.fire('Signup Success')
      navigate('/')
    })
  })
    

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
          {/* Photo URL */}
<div className="form-control">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <input
    type="text"
    name="photoUrl"
    placeholder="Enter photo URL"
    {...register("photoUrl")}
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
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      validate: {
        hasUppercase: (value) =>
          /[A-Z]/.test(value) || "Password must include an uppercase letter",
        hasLowercase: (value) =>
          /[a-z]/.test(value) || "Password must include a lowercase letter",
      },
    })}
    placeholder="Enter your password"
    className="input input-bordered w-full"
  />
  {errors.password && (
    <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
  )}
</div>


    

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>

          <div className='divider'>OR</div>
          <div className="form-control mt-4">
            <button onClick={handleGoogleLogin}  className="btn btn-outline w-full hover:btn-ghost">
             Login With Google <span className="text-2xl "><FcGoogle /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )

}