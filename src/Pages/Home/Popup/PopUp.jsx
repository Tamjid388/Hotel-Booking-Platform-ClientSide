import React, { useState } from "react";


export const PopUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);


    
    const closeModal = () => {
        setIsModalOpen(false); // Close modal
      
      };

  return (
    <div>
         {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 font-bold hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to Our Hotel Booking Platform!
              </h2>
              <p className="text-gray-600">
                Unlock exclusive offers: enjoy up to <strong>50% OFF</strong> on
                premium bookings.
              </p>
              <img
                className="mx-auto w-64 h-40 object-cover rounded-md"
                src={"https://i.ibb.co.com/ym15mVMt/speacial.jpg"}
                alt="Special Offer"
              />
              <button
                className="btn btn-primary mt-4 px-6 py-2 rounded-md text-white"
                onClick={closeModal}
              >
                Explore Offers
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
