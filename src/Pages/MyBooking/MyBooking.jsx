import React, { useContext, useState } from 'react'
import { Title } from '../../Component/Title/Title'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Authcontext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
import moment from 'moment';

export const MyBooking = () => {
    const {user}=useContext(Authcontext)
    const [id,setId]=useState()
    const [bookingDays, setBookingDays] = useState(1);
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
    const today = moment().format("YYYY-MM-DD");
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    console.log(user);
    const {
        isPending,data: bookings,refetch,
       
      } = useQuery({
        queryKey: [, "bookings",user?.email],
        queryFn: async () => {
          const res = await axios.get(`https://hotel-booking-platform-server.vercel.app/myBookings/${user.email}`);
          console.log(res.data);
          return res.data;
        },
      });

      const handleIncreaseDays = () =>
        { setBookingDays(bookingDays + 1);}
      const handleDecreaseDays = () => {
        if (bookingDays > 1) setBookingDays(bookingDays - 1);
      };
      const handleDateChange = (e) => setStartDate(e.target.value);

      const {
        data: dates = [],
       
        refetch: refetchDates,
      } = useQuery({
        queryKey: ["dates", id],
        queryFn: async () => {
          const res = await axios.get(`https://hotel-booking-platform-server.vercel.app/bookings/${id}`);
          return res.data;
        },
      });
      const isDateBooked = (date) => {
        return dates.includes(moment(date).format("YYYY-MM-DD"));
      };

      const handleUpdatebooking = (e) => {
        e.preventDefault();
    
        const bookingData = {
          id,
          startDate,
          endDate: moment(startDate)
            .add(bookingDays - 1, "days")
            .format("YYYY-MM-DD"),
        };
    
        axios
          .patch(`https://hotel-booking-platform-server.vercel.app/updateBooking`, bookingData)
          .then(() => {
            refetch();
            refetchDates();
            Swal.fire( "Booking date updated successfully.");
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              `Failed to update booking: ${error.message}`,
              "error"
            );
          });
      };












    
       // Cancel booking
  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Close",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://hotel-booking-platform-server.vercel.app/cancelbooking/${id}`)
          .then(() => {
            refetch();
            Swal.fire("Success!", "Successfully Canceled Booking", "success");
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "An error occurred. Please try again later.",
              "error"
            );
          });
      }
    });
  };
    // Handle the review 
  const handleReviewSubmit = () => {

    console.log("Review Submitted:", review);
    console.log("Rating:", rating);
    const reviewinfo={
        review: review,
        reting: rating,
        reviewDate:today
    }
    axios.post(`https://hotel-booking-platform-server.vercel.app/givereview`,reviewinfo)
    .then(res=>{
        Swal.fire("Review Given")
    })
    // Close the modal
    document.getElementById('my_modal_3').close();
  };



  if(isPending){
    return <h2 className='py-16 text-3xl font-bold'>Loading....</h2>
  }

    
  return (
    <div className='py-16 container mx-auto'>
        <Title heading={'My Bookings'}></Title>
        <div>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Price</th>
       <th>Review</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        bookings.map(booking=>  <tr key={booking._id}>
        
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={booking.image_url}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{booking.name}</div>
                 
                </div>
              </div>
            </td>
            <td>
            {booking.cost_per_night}
             
            </td>
            <td>
                <button
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                className="btn btn-sm text-sm bg-blue-100">Review</button>
            </td>
           
            <th>
                <button   onClick={() => {
                      setId(booking.roomId);
                      document.getElementById("my_modal_5").showModal();
                    }} className="btn btn-outline btn-xs">Update</button>
              <button onClick={()=>handleCancelBooking(booking._id)} className="btn btn-ghost btn-xs">Cancel</button>
            </th>
          </tr>)
    }
      
    </tbody>
  
  </table>
</div>
           
        </div>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl text-center mb-3">
              Update Booking Date
            </h3>
            <form onSubmit={handleUpdatebooking}>
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text font-semibold opacity-80">Select Date of Booking</span>
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleDateChange}
                    className={`input input-bordered  ${
                      isDateBooked(startDate) ? "input-error" : ""
                    }`}
                    required
                  />
                  <p className="text-red-500 mt-2">
                    {isDateBooked(startDate) &&
                      "Selected date is already booked."}
                  </p>
                </div>

                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text">Number of Days</span>
                  </label>
                  <div className="flex items-center gap-3 mt-2 ml-1">
                    <button
                      type="button"
                      className="btn btn-sm  btn-primary text-white"
                      onClick={handleDecreaseDays}
                    >
                      -
                    </button>
                    <span>{bookingDays}</span>
                    <button
                      type="button"
                      className="btn btn-sm  btn-primary text-white"
                      onClick={handleIncreaseDays}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-action space-x-3" method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  type="button"
                  className="btn px-8"
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className={`btn px-8 btn-primary ${
                    isDateBooked(startDate) ? "btn-disabled" : ""
                  }`}
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                   Update
                </button>
              </div>
            </form>
          </div>
        </dialog>

{/* Modal for review */}
{/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* Cancel Button */}
          <button
            type="button"
            onClick={() => document.getElementById('my_modal_3').close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Write a Review</h3>

        {/* User name */}
        <label>
            <h1>User Name:{user.name}</h1>
        </label>

        {/* Review Text Field */}
        <textarea
          placeholder="Write your review here..."
          
          onChange={(e) => setReview(e.target.value)}
          className="textarea textarea-bordered w-full my-4"
        ></textarea>

        {/* Rating Field */}
        <div className="my-2">
          <span className="mr-2">Rating:</span>
          <select
            
            onChange={(e) => setRating(Number(e.target.value))}
            className="select select-bordered"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="modal-action">
          <button
            type="button"
            onClick={handleReviewSubmit}
            className="btn btn-primary"
          >
            Submit Review
          </button>
        </div>

    
      </div>
    </dialog>
    </div>
  )
}
