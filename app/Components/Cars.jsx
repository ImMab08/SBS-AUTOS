/* eslint-disable @next/next/no-img-element */
'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef, useState } from "react";


const vehicles = [
  {
    brand: 'Chevrolet',
    model: 'Captiva',
    price: '$112.000.000,00 COP',
    year: 2022,
    km: '19.200 KM',
    engine: '2.0',
    images: ['img/cars/chevrolet-captiva-1.jpg', 'img/cars/chevrolet-captiva-2.jpg', 'img/cars/chevrolet-captiva-3.jpg',],
  },
  {
    brand: 'BMW',
    model: 'X1 118i HB',
    price: '$130.000.000,00 COP',
    year: 2022,
    km: '10.000 KM',
    engine: '3.0',
    images: ['img/cars/bmw-x1-3.jpg', 'img/cars/bmw-x1-2.jpg', 'img/cars/bmw-x1-1.jpg',],
  },
  {
    brand: 'MERCES BENZ',
    model: 'CLA 180',
    price: '$90.000.000,00 COP',
    year: 2016,
    km: '60.000 KM',
    engine: '2.0 Turbo',
    images: ['img/cars/mercedes-1.jpg', 'img/cars/mercedes-2.jpg', 'img/cars/mercedes-3.jpg',],
  },
  {
    brand: 'Kia',
    model: 'Sportage QL 2da generación',
    price: '$120.000.000,00 COP',
    year: 2021,
    km: '36.000 KM',
    engine: '2.0',
    images: ['img/cars/kia-1.jpg', 'img/cars/kia-2.jpg', 'img/cars/kia-3.jpg',],
  },
  {
    brand: 'Toyota',
    model: 'Fortune SW4 4X2',
    price: '$200.000.000,00 COP',
    year: 2019,
    km: '40.000 KM',
    engine: '2.0',
    images: ['img/cars/fortune-1.jpg', 'img/cars/fortune-2.jpg', 'img/cars/fortune-3.jpg',],
  },
  {
    brand: 'Renault',
    model: 'Captur Intesns PTP',
    price: '$72.000.000,00 COP',
    year: 2020,
    km: '52.000 KM',
    engine: '2.0',
    images: ['img/cars/renoult-1.jpg', 'img/cars/renoult-2.jpg', 'img/cars/renoult-3.jpg',],
  },
];

export default function Cars() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
    
        return 'light';
      })
      const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme ===  "light" ? "dark" : "light")
      }
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector('html').classList.add("dark")
        } else {
          document.querySelector('html').classList.remove("dark")
        }
    }, [theme])

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className=' bg-white dark:bg-black'>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h1 className='text-center pt-10 text-black dark:text-white font-bold text-3xl'>VEHICULOS DISPONIBLES</h1>
          <p className='text-black dark:text-white text-center font-bold opacity-80 pt-5 text-sm'>Encuentra en nuestro catálogo una amplia variedad de vehículos <br />para que escojas el que más te gusta</p>
        </div>
      </div>

      <div className='flex items-center justify-center pt-10 '>
        <div className='flex flex-wrap items-center justify-center gap-4  '>
          {vehicles.map((vehicle, index) => (
            <div key={index} className='w-[350px] h-[350px]flex flex-col justify-between p-2 border-2 border-black rounded-xl dark:border-white transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'>
              <Slider {...sliderSettings}>
                {vehicle.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt={`Vehicle ${index + 1}`} className='w-full h-full object-cover' />
                  </div>
                ))}
              </Slider>
              <div className='text-black dark:text-white '>
                <h1 className='font-semibold text-lg'>{vehicle.brand} {vehicle.model}</h1>
                <h2 className='font-semibold text-lg my-2'>{vehicle.price}</h2>
                <div className='flex justify-between'>
                  <div className='flex flex-col items-center' >
                    {theme === "dark" ? (
                        <img src="img/cards-components/date-white.png" className=" w-4" alt="" />
                    ) : (
                        <img src="img/cards-components/date.png" className=" w-4" alt="" />
                    )}
                    <p className='font-semibold text-sm'>{vehicle.year}</p>
                  </div>
                  <div className='flex flex-col items-center' >
                    {theme === "dark" ? (
                        <img src="img/cards-components/dashboard-white.png" className=" w-4" alt="" />
                    ) : (
                        <img src="img/cards-components/dashboard.png" className=" w-4" alt="" />
                    )}
                    <p className='font-semibold text-sm'>{vehicle.km}</p>
                  </div>
                  <div className='flex flex-col items-center' >
                    {theme === "dark" ? (
                        <img src="img/cards-components/engine-white.png" className=" w-4" alt="" />
                    ) : (
                        <img src="img/cards-components/engine.png" className=" w-4" alt="" />
                    )}
                    <p className='font-semibold text-sm'>{vehicle.engine}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center py-10'>
        <button className='bg-black text-white dark:bg-white dark:text-black rounded-full py-2 px-8 text-xl font-bold transform transition-transform duration-300 ease-in-out hover:scale-105'>
            CONOCE MÁS
        </button>
      </div>
    </section>
  );
}