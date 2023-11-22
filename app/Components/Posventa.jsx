/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Posventa() {
  return (
    <div className='my-36 flex flex-col items-center justify-center'>
        <div className=' '>
            <h1 className='text-center text-[35px] md:text-[45px] font-extrabold'> POSVENTA</h1>
            <h2 className='text-center text-[20px] md:text-[25px] font-semibold'>¿Tienes alguna emergencia?</h2>
        </div>

        <div className='flex mx-10 md:mx-52'>
            <img className=' w-[150px] md:w-[400px]' src="/img/callme.png" alt="" />
            <div className=' flex flex-col justify-center mx-2 md:mx-5'>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-center text-[15px] md:text-[25px] my-2 font-semibold'>¡LLAMANOS!</h1>
                    <p className=' text-[12px] md:text-[20px]'>De la mano de nuestros clientes las 24 horas del día. Atendemos cualquier consulta, emergencia o duda que tengas sobre tu vehículo.</p>
                </div>
                <div>
                    <h2 className='text-[10px] md:text-[20px] my-2 font-semibold'>Comunicate con uno de nuestros asesores</h2>
                    <div className='flex my-2'>
                        <img className='w-[20px] md:w-[30px]' src="/img/phone-calling-rounded-svgrepo-com.svg" alt="" /> 
                        <p className='text-[12px] md:text-[20px] mx-2'>(602) 669-6969</p>
                    </div>
                    <div className=' flex my-2'>
                        <img className='w-[20px] md:w-[30px]' src="/img/iphone-style-smartphone-material-svgrepo-com.svg" alt="" />
                        <p className='text-[12px] md:text-[20px] mx-2'>+57 301 3585724</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
