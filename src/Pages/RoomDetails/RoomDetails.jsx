// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Title } from '../../Component/Title/Title'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
// import { useForm } from 'react-hook-form'
// import moment from 'moment'
// import Swal from 'sweetalert2'

// export const RoomDetails = () => {
//   const [bookingDays, setBookingDays] = useState(1);
//   const [startDate, setStartDate] = useState();
//   const {id}=useParams()
//   console.log(id);


//   const { isPending, error, data: room } = useQuery({
//     queryKey: ['roomDetails', id], 
//     queryFn: async () => {
//       const res = await axios.get(`http://localhost:5000/rooms/${id}`);
//       return res.data; 
//     },
//   });

 

//   useEffect(()=>{
//     axios.get(`http://localhost:5000/bookings/${id}`)
//     .then(res=>{
//     console.log(res.data);
//     })
//   },[id])


//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setStartDate(selectedDate);
//   };
//   const isDateBooked = (date) => {
//     console.log(date);
   
    
//   };



//   function handledBooking(){
//      document.getElementById("my_modal_5").showModal()
//   }

//   const { register, handleSubmit, formState: { errors } } = useForm();

  
//   const onSubmit = (data) => {
//     console.log(data);
//     setStartDate(data.date)
//     const bookingdata={
//         bookingDate:data.date,
//         cost:data.price,
//         availble:room.availability,
//         capacity:room.capacity,
//         reviews:room.reviews,
       
//         enddate:moment(data.date)
//         .add(bookingDays - 1, "days") // Subtract 1 day to include the startDate in the count
//         .format("YYYY-MM-DD")
        
//     }
//     console.log(bookingdata);
//     axios.post('http://localhost:5000/bookings',bookingdata)
//     .then(res=>{
//       Swal.fire("Bookings Completed")
//     })
   
//   };
//   const handleIncreaseDays = () => setBookingDays(bookingDays + 1);
//   const handleDecreaseDays = () => {
//     if (bookingDays > 1) setBookingDays(bookingDays - 1);
//   };


//     if (isPending) return 'Loading...'
//   return (
//     <div className='py-16'>

//     <Title heading={'RoomDetails'}></Title>
//     <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-6 bg-gray-50 shadow-lg rounded-lg">
//   {/* Image Section */}
//   <div className="lg:w-1/2">
//     <img
//       src={room?.image_url}
    
//       className="w-full h-auto rounded-lg object-cover"
//     />
//   </div>

//   {/* Details Section */}
//   <div className="lg:w-1/2 flex flex-col justify-between">
//     {/* Room Title */}
//     <h1 className="text-4xl font-bold text-gray-800 mb-4">{room.name}</h1>

//     {/* Description */}
//     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//       {room.description}
//     </p>

//     {/* Cost Per Night */}
//     <div className="mt-4">
//       <h2 className="text-2xl font-semibold text-gray-900">
//         Price Per Night:
//         <span className="text-teal-500 ml-2">${room.cost_per_night}</span>
//       </h2>
//     </div>

//     {/* Call to Action (Optional) */}
//     <div className="mt-8">
//       <button onClick={handledBooking} className="bg-teal-600 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
//         Book Now
//       </button>
//       {/* <p>{bookingdates.length}</p> */}
//     </div>
//   </div>
// </div>


// {/* Modal */}
//  {/* Apply Form */}
// {/* The button to open modal */}
// {/* Open the modal using document.getElementById('ID').showModal() method */}

// <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//       {/* Form */}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       {/* Price */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Price</label>
//         <input
//           type="number"
//           placeholder="Enter price"
//           className="input input-bordered w-full"
//           defaultValue={room.cost_per_night}
//           readOnly
//           {...register('price', { required: "Price is required" })}
//         />
//         {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
//       </div>
//       {/* Date */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Date</label>
//         <input
//           type="date"
//           className="input input-bordered w-full"
//           required
//           {...register('date', { required: "Date is required" })}
//           onChange={handleDateChange}
//         />
//          {startDate && isDateBooked(startDate) && (
//       <p className="text-red-500 text-sm">Room Already Booked</p>
//     )}
//       </div>

//    {/* Date Selector */}
//    <div>
//     <label htmlFor="">Select Days</label>
//     <div className="flex items-center gap-3 mt-2 ml-1  ">
//                     <button
//                       type="button"
//                       className="btn btn-sm rounded-full btn-primary text-white"
//                       onClick={handleDecreaseDays}
//                     >
//                       -
//                     </button>
//                     <span>{bookingDays}</span>
//                     <button
//                       type="button"
//                       className="btn btn-sm rounded-full btn-primary text-white"
//                       onClick={handleIncreaseDays}
//                     >
//                       +
//                     </button>
//                   </div>
//    </div>

//     {/* Room Description */}
//     <div>
//         <label className="block text-sm font-medium text-gray-700">Room Description</label>
//         <textarea
//           placeholder="Enter room description"
//           className="textarea textarea-bordered w-full"
//           rows="4"
//           defaultValue={room.description}
//           readOnly
//         ></textarea>
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="btn btn-primary w-full">
//         Submit
//       </button>

//       {/* Close Button */}
//       <div className="modal-action">
//         <div method="dialog">
//           <button type='button'
//             onClick={() => document.getElementById("my_modal_5").close()}
//             className="btn"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </form>
    
//   </div>
// </dialog>
 

//     </div>
//   )
// }
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import moment from "moment";
// import Swal from "sweetalert2";
// import { useContext, useState } from "react";
// import { AuthContext } from "../contexts/contexts";


// const RoomDetails = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = useContext(AuthContext);
//   const [bookingDays, setBookingDays] = useState(1); // Default 1 day
//   const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD")); // Default today

//   const handleIncreaseDays = () => setBookingDays(bookingDays + 1);
//   const handleDecreaseDays = () => {
//     if (bookingDays > 1) setBookingDays(bookingDays - 1);
//   };
//   const handleDateChange = (e) => setStartDate(e.target.value);

//   const param = useParams();
//   const id = param.id;
//   const {
//     data: roomInfo = {},
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["rooms"],
//     queryFn: async () => {
//       const res = await axios.get(`http://localhost:5000/rooms/${id}`);
//       return res.data;
//     },
//   });

//   const {
//     name,
//     image,
//     capacity,
//     size,
//     bedType,
//     rating,
//     ratingCount,
//     pricePerNight,
//     description,
//     amenities,
//     availability,
//   } = roomInfo;

//   // Fetch booked room dates
//   const {
//     data: bookedDates = [],
//     // isLoading: isDatesLoading,
//     // isError: isDatesError,
//     // error: datesError,
//   } = useQuery({
//     queryKey: ["bookedDates", id],
//     queryFn: async () => {
//       const res = await axios.get(`http://localhost:5000/bookings/${id}`);
//       return res.data;
//     },
//   });

//   const isDateBooked = (date) => {
//     return bookedDates.includes(moment(date).format("YYYY-MM-DD"));
//   };





//   if (isLoading) {
//     return (
//       <div className="mt-10 mb-24">
       
//         <div className="text-center mt-20">
//           <span className="loading loading-ring loading-lg"></span>
//         </div>
//       </div>
//     );
//   }
//   if (isError) {
//     return (
//       <div className="mt-10 mb-24 px-3">
//         <SectionTitle
//           title={"Explore Our Luxurious Accommodations"}
//           description={
//             "Discover the perfect room tailored to your needs, from cozy singles to opulent suites, all designed for ultimate comfort."
//           }
//         ></SectionTitle>
//         <div className="text-center mt-20">
//           <span className="text-red-500">Error: {error.message}</span>
//         </div>
//       </div>
//     );
//   }

//   const handleBooking = (e) => {
//     e.preventDefault();

//     const bookingData = {
//       roomId: id,
//       name,
//       image,
//       bedType,
//       size,
//       pricePerNight,
//       startDate,
//       endDate: moment(startDate)
//         .add(bookingDays - 1, "days")
//         .format("YYYY-MM-DD"),
//       bookedBy: user?.email,
//     };

//     axios
//       .post("https://stay-zen.vercel.app/bookings", bookingData)
//       .then(() => {
//         Swal.fire("Success!", "Successfully Booked Room", "success");
//         navigate("/rooms");
//       })
//       .catch((error) => {
//         Swal.fire("Error!", `${error}`, "error");
//       });
//   };

//   const handleBookingClick = () => {
//     if (user) {
//       document.getElementById("my_modal_5").showModal();
//     } else {
//       navigate("/auth/login", { state: location.pathname });
//     }
//   };


//   return (
//     <div className="container mx-auto px-3 mt-5 mb-20">
//       <div className="card card-compact bg-base-100 shadow-xl">
//         <div className="card-body">
//           <div className="flex flex-col md:flex-row gap-5 mb-5">
//             <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
//               <figure className="rounded-xl">
//                 <img
//                   className="transition duration-500 transform hover:scale-105"
//                   src={image}
//                   alt={name}
//                 />
//               </figure>
//             </div>
//             <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
//               <h2 className="card-title text-primary text-3xl md:text-4xl font-bold pb-3">
//                 {name}
//               </h2>
//               <div className="space-y-2 text-lg">
//                 <p>
//                   <span className="font-bold">Capacity : </span>
//                   {capacity}
//                 </p>
//                 <p>
//                   <span className="font-bold">Size : </span>
//                   {size}
//                 </p>
//                 <p>
//                   <span className="font-bold">Bed Type : </span>
//                   {bedType}
//                 </p>
//                 <p>
//                   <span className="font-bold">Availability : </span>
//                   {availability ? "Available" : "Not Available"}
//                 </p>
//                 <div className="flex items-center gap-1">
//                   <span className="font-bold">Rating : </span>
//                   <span className="flex items-center gap-5">
//                     {`${rating}/${ratingCount}`}
//                     {rating ? (
//                       <ReactStars
//                         count={5}
//                         value={rating}
//                         size={30}
//                         activeColor="#ffd700"
//                         edit={false}
//                         isHalf={true}
//                       />
//                     ) : ""}
//                   </span>
//                 </div>
//                 <p>
//                   <span className="font-bold">Price : </span>${pricePerNight}{" "}
//                   /night
//                 </p>
//               </div>
//               <button
//                 className={`btn btn-primary px-20 mt-5 ${
//                   isLoading ? "btn-disabled" : ""
//                 }`}
//                 onClick={handleBookingClick}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>

        

        

//           <div className="card-actions justify-center">
//             <button
//               className={`btn btn-primary px-20 ${
//                 isLoading ? "btn-disabled" : ""
//               }`}
//               onClick={handleBookingClick}
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Apply Form */}

//       {isLoading ? (
//         ""
//       ) : (
//         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <h3 className="font-bold text-2xl text-center mb-3">
//               Book This Room
//             </h3>
//             <form onSubmit={handleBooking}>
//               <h2 className="card-title text-primary text-3xl md:text-4xl font-bold pb-3">
//                 {name}
//               </h2>

//               <div className="space-y-2 text-lg">
//                 <p>
//                   <span className="font-bold">Capacity : </span>
//                   {capacity}
//                 </p>
//                 <p>
//                   <span className="font-bold">Bed Type : </span>
//                   {bedType}
//                 </p>
//                 <p>
//                   <span className="font-bold">Price : </span>${pricePerNight}{" "}
//                   /night
//                 </p>
//               </div>

//               <div className="flex flex-col md:flex-row gap-5 justify-between">
//                 <div className="form-control w-full mt-5">
//                   <label className="label">
//                     <span className="label-text">Select Date of Booking</span>
//                   </label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     onChange={handleDateChange}
//                     className={`input input-bordered input-primary ${
//                       isDateBooked(startDate) ? "input-error" : ""
//                     }`}
//                     required
//                   />
//                   <p className="text-red-500 mt-2">
//                     {isDateBooked(startDate) &&
//                       "Selected date is already booked."}
//                   </p>
//                 </div>

//                 <div className="form-control w-full mt-5">
//                   <label className="label">
//                     <span className="label-text">Number of Days</span>
//                   </label>
//                   <div className="flex items-center gap-3 mt-2 ml-1">
//                     <button
//                       type="button"
//                       className="btn btn-sm rounded-full btn-accent text-white"
//                       onClick={handleDecreaseDays}
//                     >
//                       -
//                     </button>
//                     <span>{bookingDays}</span>
//                     <button
//                       type="button"
//                       className="btn btn-sm rounded-full btn-accent text-white"
//                       onClick={handleIncreaseDays}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="modal-action space-x-3" method="dialog">
//                 {/* if there is a button in form, it will close the modal */}
//                 <button
//                   type="button"
//                   className="btn px-8"
//                   onClick={() => document.getElementById("my_modal_5").close()}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className={`btn px-8 btn-primary ${
//                     isDateBooked(startDate) ? "btn-disabled" : ""
//                   }`}
//                   onClick={() => document.getElementById("my_modal_5").close()}
//                 >
//                   Confirm Booking
//                 </button>
//               </div>
//             </form>
//           </div>
//         </dialog>
//       )}

//       {/* Apply form end */}
//     </div>
//   );
// };

// export default RoomDetails;


import React from 'react'

export const RoomDetails = () => {
  return (
    <div>RoomDetails</div>
  )
}

