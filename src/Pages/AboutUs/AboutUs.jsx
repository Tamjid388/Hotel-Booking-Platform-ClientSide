import React from 'react';

export const AboutUs = () => {
  return (
    <div className='py-16'>
  

      {/* Company Overview Section */}
      <section className="company-overview py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Company</h2>
        <p className="text-lg text-center container mx-auto">
          At HotelQuest, we are committed to providing the best hotel booking experience, offering a seamless interface, secure transactions, and a wide selection of properties worldwide. Whether you're looking for a luxurious stay or a budget-friendly option, we ensure a memorable experience for every traveler.
        </p>
      </section>

      {/* Team Section */}
      <section className="team py-12 bg-base">
        <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="flex justify-center gap-8">
          <div className="team-member text-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co.com/tcsPbcr/person1.jpg" alt="Team Member 1" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-md">CEO & Co-founder</p>
          </div>
          <div className="team-member text-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co.com/dfvpWz6/ayo-ogunseinde-6-W4-F62s-N-y-I-unsplash.jpg" alt="Team Member 2" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-md">CTO & Co-founder</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center">Have questions? Reach out to us through email or call us directly!</p>
        <div className="text-center mt-6">
          <button className="btn btn-primary">Contact Support</button>
        </div>
      </section>
    </div>
  );
};
