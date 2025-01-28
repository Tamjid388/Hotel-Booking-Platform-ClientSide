import React, { useContext } from 'react'
import { Title } from '../../Component/Title/Title'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Authcontext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';

export const MyBooking = () => {
    const {user}=useContext(Authcontext)
    console.log(user);
    const {
        data: bookings,refetch
       
      } = useQuery({
        queryKey: ["bookings",user?.email],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/myBookings/${user.email}`);
          console.log(res.data);
          return res.data;
        },
      });


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
          .put(`http://localhost:5000/myBookings/update-booking`, bookingData)
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
          .delete(`http://localhost:5000/cancelbooking/${id}`)
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
        <th>Favorite Color</th>
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
            <td>Purple</td>
            <th>
                <button  onClick={() => {
                      setId(booking.roomId);
                      document.getElementById("my_modal_5").showModal();
                    }} className="btn btn-ghost btn-xs">Update</button>
              <button onClick={()=>handleCancelBooking(booking._id)} className="btn btn-ghost btn-xs">Cancel</button>
            </th>
          </tr>)
    }
      
    </tbody>
  
  </table>
</div>
           
        </div>


    </div>
  )
}
