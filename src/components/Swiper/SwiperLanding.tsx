import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import './SwiperLanding.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

type Props = {}

const SwiperLanding = (props: Props) => {
  return (
     <Swiper className='swiper'
      modules={[Navigation, Pagination, Autoplay, EffectFade]} 
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      effect={"fade"}
      speed={2000}
      autoplay={{ delay: 2000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
    
        <SwiperSlide>
            <div className="slider">
              <h3 className='slider-title'>Moraine lake, Canada</h3>
             <img src='https://r4.wallpaperflare.com/wallpaper/840/249/299/alberta-canada-moraine-lake-4k-wallpaper-d7ff75fee74a63b077a0065fb6db7c98.jpg' alt="Travel" style={{ height: "100vh", width: '100%', objectFit: 'cover' }}/>
           </div> 
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Taj Mahal, India</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/23/868/855/tourism-agra-asia-palace-wallpaper-98a65df830103c6880bcc1ae7832142a.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div> 
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>The Great Pyramid of Giza, Egypt</h3>
           <img src='https://wallpaperaccess.com/full/6957281.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Navagio Beach, Greece</h3>
           <img src='https://getwalls.io/wallpapers/320608/2020--06--santorini-4k-hd-wallpaper-photo-gallery-free-download-pc.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Great Wall of China</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/618/991/649/wall-jiankou-great-wall-of-china-great-wall-wallpaper-e7af12c41f052f1a7fb2d42161d1e745.jpg' alt="Travel" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div> 
           </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Grand Canyon, USA</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/541/674/363/grand-canyon-usa-arizona-sunset-nature-hd-wallpaper-0acabbce460123b344651d3671a0d189.jpg' alt="Travel" style={{ height: "100vh", width: '100vw', objectFit: 'cover' }} />
           </div>
           </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Angel Falls, Valenzuela</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/499/529/311/cliff-waterfall-tropical-rock-wallpaper-4970883dc11a6dcbd627e81f10e1763d.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div>
           </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Neuschwanstein castle,Germany</h3>
           <img src='https://images3.alphacoders.com/807/807167.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div>
           </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Masai Mara National Reserve, Kenia</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/203/302/519/morning-africa-national-park-arusha-national-park-wallpaper-6900781d610a5d0ba60738ef80e1b64d.jpg' alt="Falls" style={{ height: "100vh", width: '100vw', objectFit: 'cover' }} />
           </div>
           </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Desert Namib, Namibia</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/506/581/200/namibia-desert-nature-landscape-wallpaper-7211c220cd064e7b0a88c255e0988942.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div>
           </SwiperSlide>
        <SwiperSlide>
           <img src='https://r4.wallpaperflare.com/wallpaper/589/548/989/adventure-compass-map-rose-wallpaper-d8d6ac1a0f7c1709fe209972f2499bd0.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} /></SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <h3 className='slider-title'>Golden Age of Piracy</h3>
           <img src='https://r4.wallpaperflare.com/wallpaper/30/695/708/sea-sunset-photo-dawn-wallpaper-277414528ec641accdd29b26825a11b0.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
           </div>
           </SwiperSlide>
      </Swiper>
      
   )
}
export default SwiperLanding