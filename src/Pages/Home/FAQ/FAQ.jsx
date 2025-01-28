import faqimg from '../../../assets/faq.jpg'

export const FAQ = () => {
  return (
  <div className=''>
    <h1 className='text-center mt-12 text-3xl font-bold'>Frequently Asked Questions</h1>
      <div className='my-16 w-11/12 mx-auto flex flex-col md:flex-row gap-6 justify-center items-center'>
<section className='md:w-1/2'>
    <img className='h-[380px] w-full object-cover' src={faqimg} alt="" />
</section>
        {/* Accordion */}
        <section className='md:w-1/2'>
        <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">Featured Rooms</div>
  <div className="collapse-content">
    <p>Discover our top-rated rooms, featuring spacious and comfortable accommodations designed to ensure a relaxing stay.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">User Reviews</div>
  <div className="collapse-content">
    <p>Read authentic reviews from our guests to learn about their experience staying in our hotel.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Room Booking</div>
  <div className="collapse-content">
    <p>Ready to book your stay? Click here to explore our rooms, check availability, and secure your booking today!</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Hotel Features</div>
  <div className="collapse-content">
    <p>Our hotel offers exceptional amenities including a pool, fitness center, and free Wi-Fi to ensure your comfort during your stay.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Customer Support</div>
  <div className="collapse-content">
    <p>Need assistance? Our dedicated customer support team is available to help you with any questions or concerns.</p>
  </div>
</div>

        </section>

    </div>
  </div>
  )
}
