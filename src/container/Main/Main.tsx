import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';


type Props = {}
const Main = (props: Props) => {
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
         <img src='https://r4.wallpaperflare.com/wallpaper/840/249/299/alberta-canada-moraine-lake-4k-wallpaper-d7ff75fee74a63b077a0065fb6db7c98.jpg' alt="Travel" style={{ height: "100vh", width: '100%', objectFit: 'cover' }}/></SwiperSlide>
        <SwiperSlide><img src='https://images7.alphacoders.com/536/536269.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
      <SwiperSlide><img src='https://wallpaperaccess.com/full/6957281.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit:'cover' }} /></SwiperSlide>
        <SwiperSlide><img src='https://getwalls.io/wallpapers/320608/2020--06--santorini-4k-hd-wallpaper-photo-gallery-free-download-pc.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.wallpapersafari.com/87/26/HlM8pO.jpg' alt="Travel" style={{ height: "100vh", width: '100%', objectFit: 'cover' }}/></SwiperSlide>
        <SwiperSlide><img src='https://r4.wallpaperflare.com/wallpaper/541/674/363/grand-canyon-usa-arizona-sunset-nature-hd-wallpaper-0acabbce460123b344651d3671a0d189.jpg' alt="Travel" style={{ height: "100vh", width: '100vw', objectFit: 'cover' }}/></SwiperSlide>
        <SwiperSlide><img src='https://r4.wallpaperflare.com/wallpaper/499/529/311/cliff-waterfall-tropical-rock-wallpaper-4970883dc11a6dcbd627e81f10e1763d.jpg' alt="Falls" style={{ height: "100vh", width: '100%', objectFit: 'cover' }} /></SwiperSlide>
        <SwiperSlide><img src='https://images3.alphacoders.com/807/807167.jpg' alt="Falls" style={{ height: "100vh", width: '100%',  objectFit: 'cover'}} /></SwiperSlide>
        <SwiperSlide className='d-block w-100'><img src='https://r4.wallpaperflare.com/wallpaper/203/302/519/morning-africa-national-park-arusha-national-park-wallpaper-6900781d610a5d0ba60738ef80e1b64d.jpg' alt="Falls" style={{ height: "100vh", width: '100vw', objectFit:'cover'}} /></SwiperSlide>
        <SwiperSlide></SwiperSlide>
    </Swiper>
  )
}
export default Main