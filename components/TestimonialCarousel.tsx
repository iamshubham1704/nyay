'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'Nyay Portal helped me connect with a top property lawyer in 24 hours.',
    name: 'Ramesh Verma, Delhi',
  },
  {
    quote: 'The AI assistant gave me instant clarity on my legal issue. Very helpful!',
    name: 'Priya Mehta, Mumbai',
  },
  {
    quote: 'Super professional experience. Felt like a premium law firm online.',
    name: 'Aman Joshi, Bengaluru',
  },
  {
    quote: 'Got legal advice without visiting any office. Convenient and fast.',
    name: 'Simran Kaur, Chandigarh',
  },
  {
    quote: 'Highly recommend it to anyone looking for reliable legal help.',
    name: 'Ravi Deshmukh, Pune',
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <p className="text-gray-700 italic text-lg">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">— {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
