/* eslint-disable @next/next/no-img-element */
'user client'
import React from 'react'

function Footer() {
  return (
    <div  className=''>
        <footer className=" bg-gray-200 text-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <img src="/img/logo.png" className="h-10 mr-3" alt="Industrias franky Logo" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase ">Recursos</h2>
                        <ul className=" font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase">Siguenos</h2>
                        <ul className=" font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                        <ul className=" font-medium">
                            <li className="">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Industrias Franky™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;