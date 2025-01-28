
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Authcontext } from "../../Providers/Authprovider";


 export const RoomDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(Authcontext);
  const [bookingDays, setBookingDays] = useState(1); // Default 1 day
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD")); // Default today

  const handleIncreaseDays = () => setBookingDays(bookingDays + 1);
  const handleDecreaseDays = () => {
    if (bookingDays > 1) setBookingDays(bookingDays - 1);
  };
  const handleDateChange = (e) => setStartDate(e.target.value);

  const param = useParams();
  const id = param.id;
  const {
    data: roomInfo = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/rooms/${id}`);
      return res.data;
    },
  });

  const {
    name,
    image_url,
    capacity,
   
   
    cost_per_night,
    description,

    availability,
  } = roomInfo;

  // Fetch booked room dates
  const {
    data: bookedDates = [],
   
  } = useQuery({
    queryKey: ["bookedDates", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/bookings/${id}`);
      return res.data;
    },
  });

  const isDateBooked = (date) => {
    return bookedDates.includes(moment(date).format("YYYY-MM-DD"));
  };





  if (isLoading) {
    return (
      <div className="mt-10 mb-24">
       
        <div className="text-center mt-20">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="mt-10 mb-24 px-3">
        <SectionTitle
          title={"Explore Our Luxurious Accommodations"}
          description={
            "Discover the perfect room tailored to your needs, from cozy singles to opulent suites, all designed for ultimate comfort."
          }
        ></SectionTitle>
        <div className="text-center mt-20">
          <span className="text-red-500">Error: {error.message}</span>
        </div>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingData = {
      roomId: id,
      name,
      image_url,
      
      description,
      cost_per_night,
      startDate,
      endDate: moment(startDate)
        .add(bookingDays - 1, "days")
        .format("YYYY-MM-DD"),
      bookedBy: user?.email,
    };

    axios
      .post("http://localhost:5000/bookings", bookingData)
      .then(() => {
        Swal.fire("Success!", "Successfully Booked Room", "success");
        navigate("/rooms");
      })
      .catch((error) => {
        Swal.fire("Error!", `${error}`, "error");
      });
  };

  const handleBookingClick = () => {
    if (user) {
      document.getElementById("my_modal_5").showModal();
    } else {
      navigate("/auth/login", { state: location.pathname });
    }
  };


  return (
    <div className="container mx-auto px-3 mt-5 mb-20 py-16">
      <div className=" bg-base-100 ">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <figure className="rounded-xl">
                <img
                  className="transition duration-500 transform hover:scale-105"
                  src={image_url}
                  alt={'aa'}
                />
              </figure>
            </div>
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <h2 className="card-title text-primary text-3xl md:text-4xl font-bold pb-3">
                {name}
              </h2>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-bold">Capacity : </span>
                  {capacity}
                </p>
              
                <p>
                  <span className="font-bold">Bed Type : </span>
                  {description}
                </p>
                <p>
                  <span className="font-bold">Availability : </span>
                  {availability ? "Available" : "Not Available"}
                </p>
              
                <p>
                  <span className="font-bold">Price : </span>${cost_per_night}{" "}
                  /night
                </p>
              </div>
              <button
                className={`btn btn-primary px-20 mt-5 ${
                  isLoading ? "btn-disabled" : ""
                }`}
                onClick={handleBookingClick}
              >
                Book Now
              </button>
            </div>
          </div>

        

        

        
        </div>
      </div>

      {/* Apply Form */}

      {isLoading ? (
        ""
      ) : (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl text-center mb-3">
              Book This Room
            </h3>
            <form onSubmit={handleBooking}>
              <h2 className="card-title text-primary text-3xl md:text-4xl font-bold pb-3">
                {name}
              </h2>

              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-bold">Capacity : </span>
                  {capacity}
                </p>
                
                <p>
                  <span className="font-bold">Price : </span>${cost_per_night}{" "}
                  /night
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text">Select Date of Booking</span>
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleDateChange}
                    className={`input input-bordered input-primary ${
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
                      className="btn btn-sm rounded-full btn-primary text-white"
                      onClick={handleDecreaseDays}
                    >
                      -
                    </button>
                    <span>{bookingDays}</span>
                    <button
                      type="button"
                      className="btn btn-sm rounded-full btn-primary text-white"
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
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}

    
    </div>
  );
};

export default RoomDetails;




