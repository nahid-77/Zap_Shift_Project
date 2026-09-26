import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    console.log(reviews);

    return (
        <div>
            <div className='text-center'>
                <h3 className="text-3xl text-center">Customer Reviews</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt alias autem molestiae blanditiis, nulla sequi, assumenda aliquid, iure non harum quas atque eos illum quod provident excepturi nostrum quo! Consequatur?</p>
            </div>
              <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            reviews.map((review) => (
                <SwiperSlide key={review.id}>
                    <ReviewCard review={review} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
        </div>
    );
};

export default Reviews;