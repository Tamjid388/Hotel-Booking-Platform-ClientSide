import slider1 from "../../../assets/Banner/slide1.jpg"
import slider2 from "../../../assets/Banner/slide2.jpg"
import slider3 from "../../../assets/Banner/slide3.jpg"
import slider4 from "../../../assets/Banner/slide4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export const Banner = () => {
  return (
    <div className=''>
           <Swiper navigation={true}  
           modules={[Navigation]} className="mySwiper h-screen">
        <SwiperSlide className="">
        <div className="relative h-full">
            <img src={slider1} alt="Slider 1" className="w-full h-full object-cover" />
            <div className=" absolute inset-0 flex flex-col justify-center items-start px-8 bg-black bg-opacity-10   md:px-20">
              <h1 className="text-4xl md:text-5xl text-white font-bold">Welcome to Our Hotel</h1>
              <p className="text-lg md:text-xl text-white mt-4">
              Experience unmatched comfort, world-class service, and luxurious suites in the heart of the city.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
           
        </SwiperSlide>
        <SwiperSlide className="object-cover">
            <div lassName="relative h-full">
            <img className="object-cover" src={slider2} alt="" />
            <div className=" absolute inset-0 flex flex-col justify-center items-start px-8 bg-black bg-opacity-10   md:px-20">
              <h1 className="text-4xl md:text-5xl text-white font-bold">Relax and Rejuvenate</h1>
              <p className="text-lg md:text-xl text-white mt-4">
              Discover spa retreats, soothing massages, and ultimate relaxation for your body and mind.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div lassName="relative h-full">
            <img className="object-cover" src={slider3} alt="" />
            <div className=" absolute inset-0 flex flex-col justify-center items-start px-8 bg-black bg-opacity-10   md:px-20">
              <h1 className="text-4xl md:text-5xl text-white font-bold"> Adventure Awaits Around Every Corner</h1>
              <p className="text-lg md:text-xl text-white mt-4">
              Dive into thrilling experiences, from city explorations to nature’s hidden gems.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div lassName="relative h-full">
            <img className="object-cover" src={slider4} alt="" />
            <div className=" absolute inset-0 flex flex-col justify-center items-start px-8 bg-black bg-opacity-10   md:px-20">
              <h1 className="text-4xl md:text-5xl text-white font-bold"> Culinary Delights That Excite the Senses</h1>
              <p className="text-lg md:text-xl text-white mt-4">
              Indulge in gourmet dishes crafted by top chefs, blending flavors from around the globe.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}
