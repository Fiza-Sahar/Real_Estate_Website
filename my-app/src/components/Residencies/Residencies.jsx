import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Residencies.css';

const cardData = [
  {
    image: 'https://mbluxury1.s3.amazonaws.com/2024/03/01151828/luxury-real-estate-1024x574.jpg',
    price: '$29.99',
    description: 'This is a beautiful item with amazing features.',
  },
  {
    image: 'https://img.pikbest.com/wp/202345/real-estate-house-property-digital-depiction-of-a-website-featuring-an-isolated-3d-representing-residential-symbolizing-online-selling-agency-with-cottage-concept-in-rendering-web-page-illustration_9615825.jpg!w700wp',
    price: '$39.99',
    description: 'An excellent choice with premium quality and design.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4p1IcLJfunidzvjWpd4DsIp02rGcqCNxJPSntevvvkL2rQIFBc6el7zNSXtVp3XQFJEk&usqp=CAU',
    price: '$49.99',
    description: 'A must-have item that combines style and comfort.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKgKLlJ4hLMUB2BVyl_FdxMZybFLzhEV4NTcIAAeistP0eV6XlFWcAnpblJpETmAQv9c&usqp=CAU',
    price: '$59.99',
    description: 'Stylish item with durable design.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUNjsbijAooRU2PsgcAIfjq-8BSqSJ7zc80ci-EWojgXNwgbWDLewGAJn7ePYgCr1gxw&usqp=CAU',
    price: '$69.99',
    description: 'Perfect for everyday use with premium quality.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/3d-real-estate-home-isolated-white-background_895732-40.jpg',
    price: '$79.99',
    description: 'Modern design and versatile.',
  },
];

const Residencies = () => {
  return (
   <div className='residents-cards'>
    <h2>Best Choices</h2>
    <h1>Popular Residencies</h1>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      slidesPerGroup={4}
      navigation
      pagination={{ clickable: true }}
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <img src={card.image} alt={`Slide ${index + 1}`} className="card-image" />
            <div className="card-content">
              <h2 className="card-price">{card.price}</h2>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Residencies;